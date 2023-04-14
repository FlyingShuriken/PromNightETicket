import { TicketModel } from "@/models/TicketModel";
import { mailOptions, transporter } from "../../lib/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { PromNightTicket } from "@/components/PromNightTicket";
import ReactDOMServer from "react-dom/server";

type Data = any;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const supabase = createServerSupabaseClient({
		req,
		res,
	});
	const ids: TicketModel["id"][] = req.body;
	if (req.method === "POST") {
		if (!ids) {
			return res.status(400).send({ message: "Bad request" });
		}
		const user = (await supabase.rpc("get_my_claim", { claim: "userrole" }))
			.data;
		if (user === "ADMIN") {
			const adminClient = createClient(
				process.env.NEXT_PUBLIC_SUPABASE_URL as string,
				process.env.SUPABASE_ADMIN_KEY as string,
				{
					auth: {
						autoRefreshToken: false,
						persistSession: false,
					},
				}
			);
			const tickets: TicketModel[] = [];
			const { data, error } = await adminClient.from("Ticket").select();
			if (data)
				for (let id of ids) {
					const ticket = data.find((ticket) => ticket.id === id);
					if (ticket) {
						tickets.push(ticket as TicketModel);
					}
				}

			for (let ticket of tickets) {
				try {
					const html = ReactDOMServer.renderToStaticMarkup(
						<PromNightTicket
							name={ticket.name}
							contact={ticket.phoneNumber}
							icnum={ticket.id}
							qrcode={
								`${origin}/api/ticket?` + new URLSearchParams({ id: ticket.id })
							}
						/>
					);
					console.log(ticket.email);
					transporter.sendMail(
						{
							...mailOptions,
							to: ticket.email,
							subject: "Your ticket has been verified",
							text: `This is your ticket! Download it and show it with your IC to the counter!`,
							html: `<html><body><h1>This is your ticket! Download it and show it with your IC to the counter!</h1></body></html>`,
							attachments: [
								{
									filename: `ticket_${ticket.id}.html`,
									content: `
                                      <html>
                                        <body>
                                          ${html}
                                        </body>
                                      </html>
                                    `,
									contentType: "text/html",
								},
							],
						},
						function (error: any, info: any) {
							if (error) {
								console.log(error);
							} else {
								console.log("Email sent: " + info.response);
								return res.status(200).json({ data: true });
							}
						}
					);
				} catch (err: any) {
					return res.status(400).json({ error: err.message });
				}
			}
		} else {
			return res.status(401).json({ error: "Please sign in as ADMIN" });
		}
	}
	return res.status(400).json({ error: "Bad request" });
}

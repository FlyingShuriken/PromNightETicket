import Head from "next/head";
import { QRCode } from "react-qrcode-logo";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { TicketModel } from "@/models/TicketModel";

export default function Ticket({ origin }: { origin: string }) {
	const [ticket, setTicket] = useState<TicketModel | undefined>();
	const supabase = useSupabaseClient();

	useEffect(() => {
		supabase.auth.getSession().then((session) => {
			const { data, error } = session;
			if (data.session) {
				fetch(
					`${origin}/api/ticket?` +
						new URLSearchParams({ id: data.session.user.id }).toString()
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data.data);
						setTicket(data.data !== null ? data.data : undefined);
					});
			}
		});
	}, [supabase.auth]);

	return (
		<>
			{" "}
			<Head>
				<title>PromNight eTicket | Ticket</title>
			</Head>
			{ticket && (
				<div className="w-screen h-screen py-8 px-5">
					<div className=" border-2 p-8 w-full">
						<QRCode
							value={
								`${origin}/api/ticket?` +
								new URLSearchParams({ id: ticket.uid })
							}
							// className="mx-auto mb-8 w-64 h-64"
						/>
						<div className="info flex flex-row gap-5 w-full">
							<div className="left w-1/2">
								<label className=" text-slate-400">Name:</label>
								<div className="name">{ticket.name}</div>
								<label className=" text-slate-400">IC Number:</label>
								<div className="email">
									{ticket.id.length === 12
										? `${ticket.id.slice(0, 6)}-${ticket.id.slice(
												6,
												8
										  )}-${ticket.id.slice(8, 12)}`
										: ticket.id}
								</div>
							</div>
							<div className="right w-1/2">
								<label className=" text-slate-400">Contact:</label>
								<div className="phone">{ticket.phoneNumber}</div>
								<label className=" text-slate-400">Food:</label>
								<div className="food">{ticket.food}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export async function getServerSideProps() {
	const isDev = process.env.NODE_ENV === "development";
	return {
		props: {
			origin: isDev
				? process.env.DEV_DOMAIN_NAME
				: process.env.PROD_DOMAIN_NAME,
		},
	};
}

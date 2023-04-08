import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import GSpread from "@/lib/googleSheets";

type Data = any;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const supabase = createServerSupabaseClient({
		req,
		res,
	});
	const { query, method } = req;
	const id = query.id ? (query.id as string) : undefined;

	// Response
	if (method === "GET") {
		const gspread = new GSpread();
		const user = (await supabase.rpc("get_my_claim", { claim: "userrole" }))
			.data;
		const email = (await supabase.auth.getSession()).data.session?.user.email;
		if (user === "ADMIN") {
			const rows = await gspread.getRows();
			if (id)
				res
					.status(200)
					.json({ data: rows.find((row) => row["Email address"] === email) });
			else res.status(200).json({ data: rows });
			return;
		} else {
			console.log(email);
			if (!email) {
				res.status(401).json({ error: "Please sign in" });
				return;
			}
			const rows = await gspread.getTicket(email);
			res.status(200).json({ data: rows });
			return;
		}
	}
	// else if (method === "POST") {
	// 	var { data: tagPost, error: errorPost } = await supabase
	// 		.from("Ticket")
	// 		.insert(req.body)
	// 		.select();
	// 	res.status(200).json({ data: { tagPost, errorPost } });
	// }
}

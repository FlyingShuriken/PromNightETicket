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

	// Response
	if (method === "POST") {
		const user = (await supabase.rpc("get_my_claim", { claim: "userrole" }))
			.data;
		if (user !== "ADMIN") {
			res.status(401).json({ error: "Please sign in as ADMIN" });
			return;
		} else {
			const { data, error } = await supabase
				.from("Ticket")
				.upsert(req.body)
				.select();
			if (!error) {
				const gspread = new GSpread();
				const remove = await gspread.markVerified(req.body.id);
				if (remove === true) {
					res.status(200).json({ data: data, error });
					return;
				} else {
					res.status(500).json({ error });
				}
			} else {
				res.status(500).json({ error });
			}
		}
	}
}

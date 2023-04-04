import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

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
		const { data, error } = await supabase.from("Ticket").select();
		const user = (await supabase.rpc("get_my_claim", { claim: "userrole" }))
			.data;
		if (user === "ADMIN") {
			if (!id) res.status(200).json({ data: data ? data : null, error });
			else
				res
					.status(200)
					.json({ data: data ? data.find((t) => t.uid === id) : null, error });
			return;
		} else {
			if (data) {
				res.status(200).json({
					data: data.find(
						async (d: any) =>
							d.uid === (await supabase.auth.getSession()).data.session?.user.id
					),
					error,
				});
				return;
			} else {
				res.status(200).json({ data: null, error });
				return;
			}
		}
	}
}

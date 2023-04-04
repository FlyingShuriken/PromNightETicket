import Head from "next/head";
import { QRCodeSVG } from "qrcode.react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { TicketModel } from "@/models/TicketModel";
import { QrReader } from "react-qr-reader";

export default function Ticket({ origin }: { origin: string }) {
	const [ticket, setTicket] = useState<TicketModel | undefined>();
	const [scanResult, setScanResult] = useState<string | undefined>();
	const supabase = useSupabaseClient();

	useEffect(() => {
		supabase.rpc("get_my_claim", { claim: "userrole" }).then((res) => {
			if (res.data !== "ADMIN") {
				window.location.href = "/";
			}
		});
	}, [supabase]);

	const handleScan = (result: any, error: any) => {
		console.log(result, error);
	};

	return (
		<>
			{" "}
			<Head>
				<title>PromNight eTicket | Scan</title>
			</Head>
			<div className=" py-8 px-5">
				<h1 className=" text-4xl">Scan QR Code</h1>

				<QrReader
					// ViewFinder={function noRefCheck() {}}
					constraints={{
						facingMode: "environment",
					}}
					onResult={handleScan}
				/>
				{/* <p>The value is: {result}</p> */}
				{/* <p>The error is: </p> */}
			</div>
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

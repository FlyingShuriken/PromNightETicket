import Head from "next/head";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { TicketModel } from "@/models/TicketModel";
import { useZxing } from "react-zxing";
import { IconCheck, IconX } from "@tabler/icons-react";

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

	const handleScan = (result: string) => {
		if (!result.startsWith("http") || !result.includes("/api/ticket?id=")) {
			setScanResult(undefined);
			return;
		}
		const id = result.split("?id=")[1];
		if (scanResult !== id) {
			console.log(result);
			fetch(`${origin}/api/ticket?` + new URLSearchParams({ id: id }))
				.then((res) => res.json())
				.then((data) => {
					setTicket(data.data);
					setScanResult(id);
				});
			console.log(result);
		} else {
			return;
		}
	};

	const { ref } = useZxing({
		onResult(res) {
			let result = res.getText();
			handleScan(result);
		},
	});
	return (
		<>
			{" "}
			<Head>
				<title>PromNight eTicket | Scan</title>
			</Head>
			<div className=" py-8 px-5">
				<h1 className=" text-4xl">Scan QR Code</h1>
				<video ref={ref} />
				{scanResult &&
					(ticket ? (
						<>
							<div className="modal visible opacity-100 pointer-events-auto">
								<div className="modal-box">
									<h3 className="font-bold text-3xl flex justify-center">
										Verified!
									</h3>
									<IconCheck className=" text-green-400 w-24 h-24 mx-auto" />
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
									<div className="modal-action">
										<label
											htmlFor="my-modal"
											className="btn"
											onClick={() => {
												setTicket(undefined);
												setScanResult(undefined);
											}}
										>
											Close
										</label>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="modal visible opacity-100 pointer-events-auto">
								<div className="modal-box">
									<h3 className="font-bold text-3xl flex justify-center">
										Invalid!
									</h3>
									<IconX className=" text-red-400 w-24 h-24 mx-auto" />
									<div className="modal-action">
										<label
											htmlFor="my-modal"
											className="btn"
											onClick={() => {
												setTicket(undefined);
												setScanResult(undefined);
											}}
										>
											Close
										</label>
									</div>
								</div>
							</div>
						</>
					))}
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

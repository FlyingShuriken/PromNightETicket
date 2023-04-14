import { Copyright } from "@/components/Copyright";
import { TicketModel } from "@/models/TicketModel";
import { unverifiedTicketModel } from "@/models/unverifiedTicketModel";
import Head from "next/head";
import { useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Link from "next/link";
import { IconCheck, IconX } from "@tabler/icons-react";
// import { QrReader } from "react-qr-reader";

export default function Admin({ origin }: { origin: string }) {
	const [tickets, setTickets] = useState<TicketModel[] | undefined>(undefined);
	const [unverifiedTicket, setUnverifiedTicket] = useState<
		unverifiedTicketModel[] | undefined
	>(undefined);
	const [sendingTicket, setSendingTicket] = useState<
		"sending" | "success" | "failed" | undefined
	>(undefined);

	useEffect(() => {
		fetch(`${origin}/api/ticket`)
			.then((res) => res.json())
			.then((data) => {
				setTickets(data.data !== null ? data.data : undefined);
			});
		fetch(`${origin}/api/unverifiedTicket`)
			.then((res) => res.json())
			.then((data) => {
				setUnverifiedTicket(data.data);
			});
	}, []);

	const supabase = useSupabaseClient();

	useEffect(() => {
		supabase.rpc("get_my_claim", { claim: "userrole" }).then((res) => {
			console.log(res);
			if (res.data !== "ADMIN") {
				window.location.href = "/";
			}
		});
	}, [supabase]);

	const verifyTicket = async (ticket: unverifiedTicketModel) => {
		fetch(`${origin}/api/verifyTicket`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: ticket["IC number"].replaceAll("-", ""),
				created_at: new Date().getTime(),
				name: ticket["NAME (FULL NAME AS PER IC)"],
				class: ticket.Class,
				email: ticket["Email address"],
				phoneNumber: ticket["Phone Number"],
				food: ticket.Food,
				claimed: false,
				// claimed_at: 0,
			} as TicketModel),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data.error) {
					fetch(`${origin}/api/sendTicket`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ id: data.data[0].id }),
					})
						.then((res) => res.json())
						.then((data) => {
							console.log(data);
							if (data.data) {
								fetch(`${origin}/api/ticket`)
									.then((res) => res.json())
									.then((data) => {
										setTickets(data.data !== null ? data.data : undefined);
										fetch(`${origin}/api/unverifiedTicket`)
											.then((res) => res.json())
											.then((unverified) => {
												setUnverifiedTicket(
													unverified.data.filter(
														(t: unverifiedTicketModel) =>
															!data.data
																.map((t: TicketModel) => t.id)
																.includes(t["IC number"])
													)
												);
											});
									});
							}
						});
				}
				return;
			});
	};

	const handleSendTicket = async (ticket: TicketModel) => {
		setSendingTicket("sending");
		fetch(`${origin}/api/sendTicket`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: ticket.id }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.data) {
					console.log("done");
					setSendingTicket("success");
					setTimeout(() => {
						setSendingTicket(undefined);
					}, 1000);
				} else setSendingTicket("failed");
				return;
			});
	};

	return (
		<>
			<Head>
				<title>PromNight eTicket | Admin</title>
			</Head>
			<div className=" flex flex-col min-h-screen">
				<main className=" body-font flex flex-col justify-center my-auto mx-12">
					<Link className="btn btn-outline border-0 p-1" href={"/admin/scan"}>
						Scan QR Code
					</Link>

					<h2 className=" text-3xl py-5">Verified Ticket</h2>
					<div className="overflow-x-auto">
						<table className="table w-full">
							<thead>
								<tr>
									<th>IC number</th>
									<th>Name</th>
									<th>Class</th>
									<th>Food</th>
									<th>Claimed</th>
									<th>Control</th>
								</tr>
							</thead>
							<tbody>
								{tickets &&
									tickets.map((ticket) => (
										<tr key={ticket.id} className="hover">
											<td>{ticket.id}</td>
											<td>{ticket.name}</td>
											<td>{ticket.class}</td>
											<td>{ticket.food}</td>
											<td>
												{ticket.claimed === true ? (
													<CheckCircleIcon />
												) : (
													<CancelIcon />
												)}
											</td>
											<td>
												<div className="controls flex">
													<a
														href={
															unverifiedTicket?.find(
																(t) => t["IC number"] === ticket.id
															)?.["Payment Proof"]
														}
														className="btn btn-outline border-0 p-1"
														target="_blank"
														rel="noreferrer"
													>
														<ImageIcon />
													</a>
													<label
														htmlFor={`infoModal_${ticket.id}`}
														className="btn btn-outline border-0 p-1"
													>
														<InfoIcon />
													</label>
													<input
														type="checkbox"
														id={`infoModal_${ticket.id}`}
														className="modal-toggle"
													/>
													<div className="modal">
														<div className="modal-box">
															<h3 className="font-bold text-lg">More info</h3>
															<p>Phone Number: {ticket.phoneNumber}</p>
															{ticket.claimed_at && (
																<p>
																	Claimed at:
																	{new Date(ticket.claimed_at).toLocaleString()}
																</p>
															)}
															<p>Email: {ticket.email}</p>
															<div className="modal-action">
																<label
																	htmlFor={`infoModal_${ticket.id}`}
																	className="btn"
																>
																	Close
																</label>
															</div>
														</div>
													</div>
													<button
														className="btn btn-outline px-1 py-0"
														onClick={() => handleSendTicket(ticket)}
														disabled={sendingTicket === "sending"}
													>
														{sendingTicket ? (
															sendingTicket === "sending" ? (
																"SENDING"
															) : sendingTicket === "success" ? (
																<IconCheck color="green" />
															) : sendingTicket === "failed" ? (
																<IconX color="red" />
															) : (
																""
															)
														) : (
															"Send Ticket"
														)}
													</button>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
					<h2 className=" text-3xl py-5">Unverified Ticket</h2>
					<div className="overflow-x-auto">
						<table className="table w-full">
							<thead>
								<tr>
									<th>IC number</th>
									<th>Name</th>
									<th>Class</th>
									<th>Phone Number</th>
									<th>Food</th>
									<th>Control</th>
								</tr>
							</thead>
							<tbody>
								{unverifiedTicket &&
									unverifiedTicket
										.filter(
											(ticket) =>
												!tickets
													?.map((t) => t.id)
													.includes(ticket["IC number"].replaceAll("-", ""))
										)
										.map((ticket) => (
											<tr
												key={`${ticket["IC number"]}_${ticket["NAME (FULL NAME AS PER IC)"]}`}
												className="hover"
											>
												<td>{ticket["IC number"]}</td>
												<td>{ticket["NAME (FULL NAME AS PER IC)"]}</td>
												<td>{ticket.Class}</td>
												<td>{ticket["Phone Number"]}</td>
												<td>{ticket.Food}</td>
												<td>
													<div className="controls flex">
														<a
															href={ticket["Payment Proof"]}
															className="btn btn-outline border-0 p-1"
															target="_blank"
															rel="noreferrer"
														>
															<ImageIcon />
														</a>
														<label
															htmlFor={`unInfoModal_${ticket["IC number"]}`}
															className="btn btn-outline border-0 p-1"
														>
															<InfoIcon />
														</label>
														<input
															type="checkbox"
															id={`unInfoModal_${ticket["IC number"]}`}
															className="modal-toggle"
														/>
														<div className="modal">
															<div className="modal-box">
																<h3 className="font-bold text-lg">More info</h3>
																<p>
																	Payment method: {ticket["Payment Method"]}
																</p>
																<p>
																	Account Name:{" "}
																	{
																		ticket[
																			"Account Name (FOR TNG ONLY)\nIf you are not using a TNG account with your own name, please provide the account name you are using."
																		]
																	}
																</p>
																<p>Time: {ticket.Timestamp}</p>
																<p>Email: {ticket["Email address"]}</p>
																<div className="modal-action">
																	<label
																		htmlFor={`unInfoModal_${ticket["IC number"]}`}
																		className="btn"
																	>
																		Close
																	</label>
																</div>
															</div>
														</div>
														<label
															htmlFor={`confirmModal_${ticket["IC number"]}`}
															className="btn btn-outline border-0 p-1"
														>
															<CheckIcon />
														</label>
														<input
															type="checkbox"
															id={`confirmModal_${ticket["IC number"]}`}
															className="modal-toggle"
														/>
														<div className="modal">
															<div className="modal-box">
																<h3 className="font-bold text-lg">
																	Verify Ticket
																</h3>
																<div className="content flex justify-center items-center">
																	<h4 className="text-2xl">Are you sure?</h4>
																</div>
																<div className="modal-action flex justify-center">
																	<button
																		className="btn btn-accent"
																		onClick={() => verifyTicket(ticket)}
																	>
																		Verify
																	</button>
																	<label
																		htmlFor={`confirmModal_${ticket["IC number"]}`}
																		className="btn"
																	>
																		Cancel
																	</label>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
										))}
							</tbody>
						</table>
					</div>
				</main>
				<footer className=" footer footer-center p-4 bg-base-300 text-base-content">
					<Copyright />
				</footer>
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

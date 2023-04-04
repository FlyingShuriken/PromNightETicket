import { Copyright } from "@/components/Copyright";
import { TicketModel } from "@/models/TicketModel";
import Head from "next/head";
import { useState } from "react";

export default function Apply() {
	const [name, setName] = useState<TicketModel["name"]>("");
	const [hp, setHP] = useState<TicketModel["phoneNumber"]>("");
	const [food, setFood] = useState<TicketModel["food"]>("Non-Vegan");
	const [payment, setPayment] = useState<"TNG" | "BANK">();

	return (
		<>
			<Head>
				<title>PromNight eTicket | Apply</title>
			</Head>
			<div className=" flex flex-col min-h-screen">
				<main className=" my-auto flex flex-col justify-center items-center">
					<div className="form flex flex-col gap-2 w-3/5">
						<h3 className=" text-4xl">Please fill in the form</h3>
						<div className="data flex flex-row gap-5">
							<div className="left w-1/2">
								<div className="name flex flex-col ">
									<label className="text-xl">Name:</label>
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										className="input input-bordered"
										required
										value={name}
										onChange={(e) => setName(e.currentTarget.value)}
									/>
								</div>
								<div className="name flex flex-col ">
									<label className="text-xl">Phone number:</label>
									<input
										type="text"
										name="hp"
										placeholder="Phone number"
										className="input input-bordered"
										required
										value={hp}
										onChange={(e) => setHP(e.currentTarget.value)}
									/>
								</div>

								<div className="name flex flex-col ">
									<label className="text-xl">Food type:</label>
									<select
										name="food"
										placeholder="Food type"
										className="input input-bordered"
										required
										value={food}
										onChange={(e) => setFood(e.currentTarget.value as any)}
									>
										<option value="Vegan">Vegan</option>
										<option selected value="Non-Vegan">
											Non-Vegan
										</option>
										<option value="Other">Other</option>
									</select>
								</div>
							</div>
							<div className="right w-1/2 payment flex flex-col">
								<label className="text-xl">Payment method:</label>
								<div className="paymentMethod ">
									<div className="tng flex items-center gap-2">
										<label className="text-base">TNG eWallet</label>
										<input
											type="radio"
											name="radio-1"
											required
											className="radio"
											onChange={() => setPayment("TNG")}
										/>
									</div>
									<div className="bank flex items-center gap-2">
										<label className="text-base">Bank Transfer/DuitNow</label>
										<input
											type="radio"
											name="radio-1"
											required
											className="radio"
											onChange={() => setPayment("BANK")}
										/>
									</div>
								</div>

								{payment ? (
									payment === "TNG" ? (
										<>
											<div className="py-3">
												<p>Pick one:</p>
												<div className="account flex flex-row gap-5">
													<div className="hd">
														<p>0172432226</p>
														<p>Handrick Low</p>
													</div>
													<div className="js">
														<p>0189000713</p>
														<p>Choi Jin Seng</p>
													</div>
												</div>
											</div>
										</>
									) : (
										<>
											<div className="py-3">
												<div className="account flex flex-row gap-5">
													<div className="js">
														<p>0101 3445 6223</p>
														<p>Choi Jin Seng</p>
													</div>
												</div>
											</div>
										</>
									)
								) : (
									<></>
								)}
								<label className="text-xl">Screenshot:</label>
								<input
									type="file"
									required
									className="file-input file-input-bordered w-full max-w-xs"
								/>
							</div>
						</div>

						<label htmlFor="my-modal" className="btn">
							Submit
						</label>
					</div>

					{/* Put this part before </body> tag */}
					<input type="checkbox" id="my-modal" className="modal-toggle" />
					<div className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">
								Congratulations random Internet user!
							</h3>
							<p className="py-4">
								You&apos;ve been selected for a chance to get one year of
								subscription to use Wikipedia for free!
							</p>
							<div className="modal-action">
								<label htmlFor="my-modal" className="btn">
									Yay!
								</label>
							</div>
						</div>
					</div>
				</main>
				<footer className=" footer footer-center p-4 bg-base-300 text-base-content">
					<Copyright />
				</footer>
			</div>
		</>
	);
}

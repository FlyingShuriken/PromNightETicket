import { Copyright } from "@/components/Copyright";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Image from "next/image";

export default function Signin() {
	const supabase = useSupabaseClient();

	const signUpWithGoogle = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: "/",
			},
		});
	};

	return (
		<>
			<Head>
				<title>PromNight eTicket | Home</title>
			</Head>
			<div className=" flex flex-col min-h-screen">
				<main className=" body-font flex justify-center items-center my-auto">
					<div className="container px-5 py-24 mx-auto flex flex-col items-center gap-5">
						<div className="flex flex-col justify-center items-center">
							<h1 className="title-font font-medium text-3xl ">
								Sign In to verify your payment and get your ticket!
							</h1>
						</div>
						<div className="w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col items-center mt-10">
							<h2 className="text-gray-900 text-lg font-medium title-font mb-5">
								Sign In
							</h2>
							<div className="relative mb-4 w-full">
								<button
									className="btn w-full text-black bg-white hover:bg-slate-200"
									onClick={signUpWithGoogle}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-brand-google mr-3"
										width="1.25rem"
										height="1.25rem"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
									</svg>
									Sign In with Google
								</button>
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

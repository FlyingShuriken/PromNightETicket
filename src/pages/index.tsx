import { useEffect, useState } from "react";
import Head from "next/head";
import { Copyright } from "@/components/Copyright";
import { Session, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { TicketModel } from "@/models/TicketModel";

const Home = ({ origin }: { origin: string }) => {
	const [userSession, setUserSession] = useState<Session | null>(null);
	const [ticket, setTicket] = useState<TicketModel | undefined>(undefined);
	const [unverifiedTicket, setUnverifiedTicket] = useState<
		TicketModel | undefined
	>(undefined);
	const supabase = useSupabaseClient();
	useEffect(() => {
		supabase.auth.getSession().then((session) => {
			const { data, error } = session;
			if (data.session) {
				setUserSession(data.session);
			}
		});
	}, [supabase.auth]);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", "light");
	}, []);

	useEffect(() => {
		if (userSession) {
			fetch(`${origin}/api/ticket`)
				.then((res) => res.json())
				.then((data) => {
					setTicket(data.data !== null ? data.data : undefined);
					if (!data.data) {
						fetch(`${origin}/api/unverifiedTicket`)
							.then((res) => res.json())
							.then((data) => {
								setUnverifiedTicket(data.data);
							});
					}
				});
		}
	}, [origin, userSession]);

	return (
		<>
			<Head>
				<title>PromNight eTicket | Home</title>
			</Head>
			<div className=" flex flex-col min-h-screen">
				<main className=" my-auto flex flex-col justify-center items-center">
					<h1 className=" text-center text-5xl py-5">
						Welcome to our eTicketing website!
					</h1>
					{userSession ? (
						ticket ? (
							<>
								<div className=" text-center text-2xl py-5">
									You have a ticket!
								</div>
								<Link className=" btn btn-primary" href={"/ticket"}>
									View it
								</Link>
							</>
						) : unverifiedTicket ? (
							<>
								<div className=" text-center text-2xl py-5">
									You have a unverified ticket, you can wait for the team to
									verify it. Come back later!
								</div>
							</>
						) : (
							<>
								<div className=" text-center text-2xl py-5">
									You don&apos;t have a ticket
								</div>
								<a
									className=" btn btn-primary"
									href="https://forms.gle/rfMXCsmecVtb7HS76"
									target="_blank"
									rel="noreferrer"
								>
									Buy one
								</a>
							</>
						)
					) : (
						<>
							<h5 className=" text-center text-2xl py-5">
								You may Sign In to continue! Please sign in with the Gmail
								account you specified in the form.
							</h5>
							<div className=" flex justify-center mt-4">
								<Link className=" btn btn-primary" href="/signin">
									Sign In
								</Link>
							</div>
						</>
					)}
				</main>
				<footer className=" footer footer-center p-4 bg-base-300 text-base-content">
					<Copyright />
				</footer>
			</div>
		</>
	);
};

export default Home;

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

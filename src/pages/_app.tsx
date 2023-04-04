import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	useEffect(() => {
		// set data-theme to light in html
		document.documentElement.setAttribute("data-theme", "light");
	}, []);

	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<Navbar />
			<Component {...pageProps} />
		</SessionContextProvider>
	);
}

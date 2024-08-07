import "../styles/custom.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ButtonWhatsapp from "components/main/ButtonWhatsapp";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();


	return (
		<>

		{/* script para google analytics */}
		<Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

		<Script strategy='lazyOnload' id="js">
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
				});
			`}
		</Script>
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			<ButtonWhatsapp />
		</QueryClientProvider>
		</>
		
	);
}

export default MyApp;

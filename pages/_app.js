import "../styles/custom.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ButtonWhatsapp from "components/main/ButtonWhatsapp";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();

	const router = useRouter();

	useEffect(() => {
		import("react-facebook-pixel")
			.then((x) => x.default)
			.then((ReactPixel) => {
				ReactPixel.init("545058853440226");
				ReactPixel.pageView();

				router.events.on("routeChangeComplete", () => {
					ReactPixel.pageView();
				});
			});
	}, [router.events]);

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			<Analytics />
			<ButtonWhatsapp />
		</QueryClientProvider>
	);
}

export default MyApp;

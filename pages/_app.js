import "../styles/custom.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ButtonWhatsapp from "components/main/ButtonWhatsapp";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ButtonWhatsapp />
    </QueryClientProvider>
  );
}

export default MyApp;

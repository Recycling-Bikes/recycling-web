import "../styles/custom.scss";

import BicisState from "context/BicisNot/BicisState";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <BicisState>
          <Component {...pageProps} />
        </BicisState>
    </QueryClientProvider>
  );
}

export default MyApp;



import "../styles/custom.scss"
import UserState from "context/User/UserState"
import BicisState from "context/Bicis/BicisState"
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';



function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
    <UserState>
      <BicisState>
      <Component {...pageProps} />
      </BicisState>
    </UserState>
    </QueryClientProvider>
  )
}

export default MyApp

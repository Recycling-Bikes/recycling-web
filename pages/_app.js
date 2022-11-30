

import "../styles/custom.scss"
import UserState from "context/User/UserState"



function MyApp({ Component, pageProps }) {
  return(
    <UserState>
      <Component {...pageProps} />
    </UserState>
  )
}

export default MyApp

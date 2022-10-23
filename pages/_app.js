import '../styles/globals.css'
import { RoleProvider } from "../contexts/role";

function MyApp({ Component, pageProps }) {
  return (
    <RoleProvider>
      <Component {...pageProps} />
    </RoleProvider>
  )
}

export default MyApp
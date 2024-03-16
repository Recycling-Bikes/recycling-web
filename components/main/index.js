import NavB from "./NavB";
import Footer from "./Footer";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAdminVerification } from "hooks/adminUser/useAdminVerification";
import { userState } from "context/User/UserState";


const Main = (props) => {
  const user = userState((state) => state.user);
  const isAdmin = useAdminVerification(user?.id);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mesa.png" />
        <title>Recycling</title>
      </Head>

      <SSRProvider>
        <NavB />

        {props.children}

        <Container fluid className="footer-customs border-top">
          {isAdmin && (
            <div className="me-auto text-center p-2 fixed-bottom  bg-warning ">
              estas navengando como administrador
            </div>
          )}

          <Footer />
        </Container>
      </SSRProvider>
    </>
  );
};

export default Main;

import NavB from "./NavB";
import Footer from "./Footer";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";
import { Container } from "react-bootstrap";
import useUserRole from "hooks/roleAdmin/roleAdmin";

const Main = (props) => {

	const role = useUserRole();


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


				{
					role === 'super-admin' ? (
						<div className="me-auto text-center p-2 fixed-bottom  bg-warning ">estas navengando como administrador</div>
					) : null
				}
					<Footer />
				</Container>
			</SSRProvider>
		</>
	);
};

export default Main;

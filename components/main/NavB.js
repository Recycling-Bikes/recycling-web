import User from "./user";
import Image from "next/image";

import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
} from "react-bootstrap";
import {BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import Search from "./search";


export default function NavB() {


	


	return (
		<>
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
			sticky="top"
			className="hover-custom shadow-sm w-100"
		>
			<Container>
				{/* Logo */}
				<Link href="/">
					<Image
						src="/recycling.png"
						width="60"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Link>
				{/* End Logo */}

				{/* NavBar */}
				<Search className="d-lg-none" />

				{/* NavBar Toggle */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto flex-fill" />

					<Nav className="me-auto flex-fill">
						<Link href="/compra" className="nav-link">
							Comprar
						</Link>
						<Link href="/vender" className="nav-link">
							Vender y avaluó
						</Link>

						{/*             <Nav.Link href="/avaluador">Avaluador</Nav.Link>
						 */}

						<Link href="/espera" className="nav-link">
							Lista de espera
						</Link>

						<Link href="/otrosservices" className="nav-link">
							Otros servicios
						</Link>
					</Nav>

					<Nav>
						<NavDropdown
							title={<BiSearchAlt size={23} />}
							id="basic-nav-dropdown"
							align={{ lg: "end" }}
							
						>
							<Search
								style={{
									minWidth: "300px",

									
								}}
								className="flip"
							/>
						</NavDropdown>

						{/*             <Link href="#deets" className="nav-link  d-none d-lg-block">
              <FiShoppingCart size={22} />{" "}
            </Link> */}
						<User />
					</Nav>
				</Navbar.Collapse>

				

				{/* End NavBar Toggle */}
			</Container>
		</Navbar>
		
		</>
	);
}

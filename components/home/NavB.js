import Image from "next/image";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsPersonCircle } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import User from "./user";
import Link from "next/link";
import { userState } from "context/User/UserState";

export default function NavB({}) {
  const user = userState((state) => state.user);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="hover-custom shadow-sm w-100"
    >
      <Container >
        <Link href="/">
          <Image
            src="/recycling.png"
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-fill"></Nav>

          <Nav className="me-auto flex-fill">
            <Nav.Link href="/parking">
              Comprar
            </Nav.Link>
            <Nav.Link href="/intermedio">Vender</Nav.Link>

            <Nav.Link href="/avaluador">
              Avaluador
            </Nav.Link>

            <Nav.Link href="#features" disabled>
              Aparta tu bici
            </Nav.Link>

            <Nav.Link href="#pricing" disabled>
              Lista de espera
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
              <BiSearchAlt size={23} />{" "}
            </Nav.Link>
            <Nav.Link href="#deets">
              <FiShoppingCart size={22} />{" "}
            </Nav.Link>
            <User />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

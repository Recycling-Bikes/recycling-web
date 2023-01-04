import React, { useContext } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import UserContext from "context/User/UserContext";

export default function User() {
  const { deleteUser } = useContext(UserContext);
  return (
    <div>
      <NavDropdown title="Perfil" id="user">
        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>

        <NavDropdown.Item href="/">Something else here</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="" onClick={() => deleteUser()}>
          Cerrar sesión
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

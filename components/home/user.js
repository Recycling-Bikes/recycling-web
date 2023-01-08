
import { NavDropdown, Nav } from "react-bootstrap";

import { userState } from "context/User/UserState";

export default function User() {

  const signOut = userState(state => (state.signOut))
  return (
    <div>
      <NavDropdown title="Perfil" id="user">
        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>

        <NavDropdown.Item href="/">Something else here</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="" onClick={() => signOut()}>
          Cerrar sesión
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

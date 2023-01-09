import { Nav, NavDropdown, Spinner } from "react-bootstrap";
import { userState } from "context/User/UserState";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function User() {
  const signOut = userState((state) => state.signOut);

  const user = userState((state) => state.user);

  const [state,setState] = useState(false)

  useEffect(()=>{
    setState(true)
  },[])

  if(!state){
    return <Spinner animation="grow" />
  }

  if(Object.keys(user).length !== 0){
  return (
    <div>
      <NavDropdown title="Perfil">
        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>

        <NavDropdown.Item href="/">Something else here</NavDropdown.Item>

        <NavDropdown.Item href="" onClick={() => signOut()}>
          {"Cerrar sesión"}
        </NavDropdown.Item>
      </NavDropdown>
      </div>
  );}

  return (
    <div>
    <Link href="/form/singin"  className=" nav-link text-primary">
      <BsPersonCircle /> Acceder
    </Link>
    </div>
  );
}

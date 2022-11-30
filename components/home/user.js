import React, {useContext} from 'react'
import {NavDropdown, Nav} from 'react-bootstrap';
import { supabase } from 'supabase/client';
import UserContext from 'context/User/UserContext';


export default function User() {
  const {deleteUser} = useContext(UserContext)
  return (

    <div>
        <NavDropdown title="Perfil" style={{color: "green"}} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link href="/perfil" className='text-primary'>Perfil</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={()=> deleteUser()}>
                Cerrar sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
    </div>
  )
}

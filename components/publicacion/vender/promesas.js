import Link from "next/link";
import React from "react";
import { Container, Button, Accordion } from "react-bootstrap";
import { BsShieldCheck } from "react-icons/bs";

export default function Promesas() {
  return (
    <Accordion className="mt-3 separador" defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1" className="separador">
        <Accordion.Header>
          <span className="fw-bold">Envío y ensamblaje</span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="fw-bold">Garantía</span>
        </Accordion.Header>

        <Accordion.Body>
          {/*           <Link href="#">
            <BsShieldCheck className="me-2" />
            Recycling Certified - 12 meses
          </Link> */}
          <p className="mt-2">
            {/* Esta bicicleta ha sido inspeccionada y certificada por nuestros
            expertos mecánicos.
            <br />
            <br />
            Nuestro servicio de guante blanco incluye una puesta a punto de
            transmisión, frenos y dirección. Los consumibles desgastados como
            cadena, pastillas de freno, cubiertas o cableado son reemplazados
            por otros nuevos si han llegado al final de su vida útil */}
            Esta bicicleta será revisada antes de su entrega, para validar que
            el cuadro no tenga fisuras ni hayan piezas rotas.
          </p>
          <hr className="text-secondary" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

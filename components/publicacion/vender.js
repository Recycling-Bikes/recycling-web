import Link from "next/link";
import { Container, Button, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import { parkingState } from "context/Parking/ParkingState";
import { BsChatSquareDots, BsShieldCheck } from "react-icons/bs";

export default function Descriptons() {
  const bici = parkingState((state) => state.bici);

  return (
    <Container className="py-3 d-flex flex-column">
      <h2>{bici.title}</h2>
      <p className="text-secondary">SKU: {bici.id}</p>

      <p className="mb-0 text-secondary ">
        Altura recomendada del ciclista:{" "}
        <strong className="text-black">1,77m - 1,85m</strong>
      </p>
      <Link href="#">Guía de tallas</Link>
      <h2 className="my-4">${bici.price.toLocaleString("en")}</h2>
      <Link
        target="_blank"
        className="d-flex"
        href={`https://wa.me/50769240795?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20si%20la%20bicicleta%20con%20identificador%20${bici.id}%20est%C3%A1%20disponible%20para%20su%20compra.%20%C2%BFPodr%C3%ADa%20confirmar%20si%20est%C3%A1%20disponible%20y%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20caracter%C3%ADsticas%20y%20precio%3F%20Gracias.%0Ahttps%3A%2F%2Frecyclingbikes.co%2Fparking%2F${bici.id}`}
      >
        <Button className="mb-2 py-2 w-100">Comprar</Button>
      </Link>
      {/* <Button className="mb-2" variant="outline-primary btn-outline">
        Trade - in
      </Button> */}
      <div className="mt-3 d-flex justify-content-center">
        <h6 className="fw-bold">
          <BsChatSquareDots className="me-2" />
          Dudas sobre la bici?{" "}
          <Link href="#" className="fw-normal">
            {" "}
            Pregúntanos
          </Link>
        </h6>
      </div>

      <Accordion className="mt-3 separador" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1" className="separador">
          <Accordion.Header>
            <span className="fw-bold">Envío y ensamblaje</span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
            <Link href="#">
              <BsShieldCheck className="me-2" />
              Recycling Certified - 12 meses
            </Link>
            <p className="mt-2">
              Esta bicicleta ha sido inspeccionada y certificada por nuestros
              expertos mecánicos.
              <br />
              <br />
              Nuestro servicio de guante blanco incluye una puesta a punto de
              transmisión, frenos y dirección. Los consumibles desgastados como
              cadena, pastillas de freno, cubiertas o cableado son reemplazados
              por otros nuevos si han llegado al final de su vida útil
            </p>
            <hr className="text-secondary" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

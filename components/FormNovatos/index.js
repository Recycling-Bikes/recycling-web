import Formimg from "components/formlogin/Formimg";
import Contenedor from "components/home/Contenedor";


import { Col, Container, Row } from "react-bootstrap";

import ImagePrueba from "./img";


export default function FormNovatos(props) {


  return (
    <Contenedor>
      <Container>
      <Row>
        <Col>

      {props.children}
      </Col>

      <Col className="d-none d-xl-block">
      <ImagePrueba/>
      </Col>
      </Row>
      </Container>
    </Contenedor>
  );
}

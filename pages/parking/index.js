import Main from "components/main";
import Bicicletas from "./Listado/Bicicletas";
import Filtro from "./Listado/Filtro";
import { Container, Row, Col } from "react-bootstrap";

export default function Todasbicis() {
  return (
    <Main>
      <Container className="my-5">
        <Row>
          <h2 className="px-4">Estas bicis son para ti</h2>
        </Row>
        <Row>
          <Col className="px-4 d-none d-xl-grid" xl="3">
            <Filtro />
          </Col>
          <Col className="separador">
            <Bicicletas/>
          </Col>
        </Row>
      </Container>
    </Main>
  );
}

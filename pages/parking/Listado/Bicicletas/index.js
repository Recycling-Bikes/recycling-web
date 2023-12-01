import { Card, Button, Row, Col } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import GetBicis from "./bicis";
import FiltersMobile from "../FiltersMobile";

export default function Bicicletas() {
  return (
    <div>
      <Card className="my-3 lg w-100" style={{ width: "auto" }}>
        <Card.Body>
          <Row className=" align-items-center">
            {" "}
            <Col>
              <Card.Title>Guarda tu búsqueda</Card.Title>
              <Card.Text>
                Filtra tus resultados, y recibe una notificación cuando lleguen
                nuevos productos coincidentes.
              </Card.Text>
            </Col>
            <Col lg="auto" className="d-grid gap-2 py-3">
              <Button style={{ width: "auto" }} variant="outline-primary">
                {/* //Add bell */}
                <BsBell className="me-2" />
                Notificarme
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* FiltersMobile */}
      <div className="justify-content-center">
        <FiltersMobile className="d-block d-xl-none" />
      </div>
      <GetBicis />
    </div>
  );
}

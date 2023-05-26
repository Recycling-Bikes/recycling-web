import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { BsPatchCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Martket() {
  const router = useRouter();

  const styleIcons = {
    color: "#3FB9AD",
  };
  return (
    <Container className="my-4 mb-5">
      <div className=" d-block d-lg-none  p-4" />

      <Row className="">
        <Col lg={4} className="pb-4  d-block m-1">
          <div md={100} className=" text-center bg-image">
            <Card.Img
              variant="top"
              src="/assest/otrosservices/ima2.png"
              className=" image-fluid "
              style={{ borderRadius: " 30px" }}
            />
          </div>
        </Col>

        <Col className="mx-4 px-2 d-flex flex-column justify-content-center align-items-baseline">
          <h3 className=" tittle-custom pb-4">Beneficios del Bike Fitting </h3>
          <Row>
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  <BsPatchCheckFill
                    className="me-2"
                    width={40}
                    style={styleIcons}
                  />
                  <span className="ml-2">Mejora tu postura.</span>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center py-3">
                  <BsPatchCheckFill
                    className="me-2"
                    width={40}
                    style={styleIcons}
                  />
                  <span className="ml-2">Aumenta la comodidad.</span>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  <BsPatchCheckFill
                    className="me-2"
                    width={40}
                    style={styleIcons}
                  />
                  <span className="ml-2">Aumenta tu rendimiento.</span>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center py-3">
                  <BsPatchCheckFill
                    className="me-2"
                    width={40}
                    style={styleIcons}
                  />
                  <span className="ml-2">Evita lesiones.</span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Button className="mt-2" variant="outline-primary" onClick={() => {}}>
            Agenda tu cita
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Martket;

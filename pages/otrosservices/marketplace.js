import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { BsPatchCheckFill, BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";

function Martket() {
  const router = useRouter();

  const styleIcons = {
    color: "#3FB9AD",
  };
  return (
    <Container className="my-4 mb-5">
      <div className=" d-block d-lg-none  p-4" />

      <Row className="justify-content-between">
        <Col lg={6} className="pb-4  d-block m-1">
          <div className="text-center bg-image">
            <Card.Img
              variant="top"
              src="/assest/otrosservices/ima2.png"
              className="w-100 h-100"
              style={{ borderRadius: "30px" }}
            />
          </div>
        </Col>

        <Col
          lg={4}
          className="mx-4 px-2 d-flex flex-column justify-content-center align-items-baseline"
        >
          <h3 className=" tittle-custom pb-4">Beneficios del Bike Fitting </h3>
          <Row className="align-items-lg-center justify-content-center  w-100">
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

          <Button
            className=" d-flex align-items-center"
            variant="outline-primary"
            onClick={() => {
              router.push("https://wa.me/50769240795?text=%C2%A1Hola!");
            }}
          >
            <BsWhatsapp className="me-2" />
            Agenda tu cita
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Martket;

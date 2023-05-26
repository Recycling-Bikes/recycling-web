import React from "react";
import { Row, Container, Card, Button } from "react-bootstrap";
import { BsTag, BsBagCheck, BsCurrencyDollar } from "react-icons/bs";

export default function Promesas() {
  const styleIcons = {
    color: "#3FB9AD",
  };

  return (
    <Container
      fluid
      className="mt-5 pb-5 px-auto d-flex flex-column 
      justify-content-center "
    >
      <Row className="pt-5 mx-5 d-flex justify-content-center" fluid="true">
        <h2 className="d-flex justify-content-center tittle-custom">
          Cómo lo hacemos
        </h2>

        <Row className="d-flex justify-content-center py-3 gap-lg-5 gap-1">
          {/* Card 1 */}
          <div
            style={{
              width: "17rem",
              color: "primary",
              backgroundColor: "transparent",
            }}
            className="m-3 py-2 px-3"
          >
            <center>
              <Card.Body className="justify-content-center align-items-center">
                <BsTag size={29} className="mb-3" style={styleIcons} />

                <Card.Text className="text-secondary">
                  Entrevista, antecedentes y expectativas
                </Card.Text>
              </Card.Body>
            </center>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "17rem",
              color: "primary",
              backgroundColor: "transparent",
            }}
            className="m-3 py-2 px-3"
          >
            <center>
              <Card.Body>
                <BsBagCheck size={29} className="mb-3" style={styleIcons} />

                <Card.Text className="text-secondary">
                  Acomodación de calas
                </Card.Text>
              </Card.Body>
            </center>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "17rem",
              color: "primary",
              backgroundColor: "transparent",
            }}
            className="m-3 py-2 px-3"
          >
            <center>
              <Card.Body>
                <BsCurrencyDollar
                  size={29}
                  className="mb-3"
                  style={styleIcons}
                />

                <Card.Text className="text-secondary">
                  Toma de ángulos y medidas
                </Card.Text>
              </Card.Body>
            </center>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "17rem",
              color: "primary",
              backgroundColor: "transparent",
            }}
            className="m-3 py-2 px-3"
          >
            <center>
              <Card.Body>
                <BsCurrencyDollar
                  size={29}
                  className="mb-3"
                  style={styleIcons}
                />

                <Card.Text className="text-secondary">
                  Análisis de pedaleo y conclusiones
                </Card.Text>
              </Card.Body>
            </center>
          </div>
        </Row>
      </Row>
    </Container>
  );
}

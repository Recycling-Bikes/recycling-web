import Main from "components/main";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

export default function PoliticalComponent() {
  return (
    <Main>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Políticas de privacidad</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Términos y condiciones</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane className="mb-3"  eventKey="first">Hola</Tab.Pane>
              <Tab.Pane className="mb-3" eventKey="second">Data</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Main>
  );
}

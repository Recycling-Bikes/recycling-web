import React, { useContext, useEffect } from "react";
import { Table, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import BicisContext from "context/Bicis/BicisContext";

export default function Tabla() {

  const {bici} = useContext(BicisContext)

  const data = (name, datum) => {
    return (
      <tr>
        <td colSpan={2}>{name}</td>
        <td colSpan={2}>{datum}</td>
      </tr>
    );
  };

  return (
    <div>
      <Row>
        <Col md="2">
          <h5>Detalles</h5>
        </Col>
        <Col>
          <Table striped>
            <thead>
              <tr></tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
        </Col>
      </Row>

      {bici.others ? <Row className="mt-5">
        <Col md="2">
          <h5>Build</h5>
        </Col>
        <Col>
          <Table striped>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>Sillín</td>
                <td colSpan={2}>None</td>
              </tr>
              <tr>
                <td colSpan={2}>Rines</td>
                <td colSpan={2}>None</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      : null}
    </div>
  );
}


import { Table, Col, Row } from "react-bootstrap";

import { parkingState } from "context/Parking/ParkingState";

export default function Tabla() {

  const bici = parkingState((state)=> state.bici)

  const {
    brand,
    models,
    size,
    material,
    transmission = null,
    suspension = null,
    wheels = null,
    saddle = null,
    others = null,
  } = bici

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
            {brand ? data("Marca", brand) : null}

{models.name ? data("Modelo", models.name) : null}

{size.name ? data("Talla", size.name) : null}

{material ? data("Material", material) : null}

{transmission ? data("Transmisión", transmission) : null}

{suspension ? data("Suspensión", suspension) : null}

{saddle ? data("Sillín", saddle) : null}

{wheels ? data("Rines", wheels) : null}

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

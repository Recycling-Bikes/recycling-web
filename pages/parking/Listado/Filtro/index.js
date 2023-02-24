import React from "react";
import { Accordion, Form, Row, Col } from "react-bootstrap";

export default function Filtro() {
    return (
        <div className="separador">
            <Accordion defaultActiveKey={["0", "8"]} flush alwaysOpen>
                {/* Start - Categoría */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="py-0">
                        <h5>Categoría</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"cicloruta-checkbox"}
                            label={`Cicloruta`}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"montana-checkbox"}
                            label={`Montaña`}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"ruta-checkbox"}
                            label={`Ruta`}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Categoría */}

                {/* --------------------- */}

                {/* Start - Subcategoría */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5>Subcategorías</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"doublesuspension-checkbox"}
                            label={"Double suspension"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"crosscountry-checkbox"}
                            label={"Cross country"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"trail-checkbox"}
                            label={"Trail"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"downhill-checkbox"}
                            label={"Down Hill"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Subcategoría */}

                {/* --------------------- */}

                {/* Start - Talla */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5>Talla</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"xxl-checkbox"}
                            label={"XXL"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"xl-checkbox"}
                            label={"XL"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"l-checkbox"}
                            label={"L"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"m-checkbox"}
                            label={"M"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"s-checkbox"}
                            label={"S"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"xs-checkbox"}
                            label={"XS"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Talla */}

                {/* --------------------- */}

                {/* Start - Marca */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h5>Marca</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"allied-checkbox"}
                            label={"Allied"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"bmc-checkbox"}
                            label={"BMC"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"canyon-checkbox"}
                            label={"Canyon"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"dimond-checkbox"}
                            label={"Dimond"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"electra-checkbox"}
                            label={"Electra"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"xs-checkbox"}
                            label={"XS"}
                        />
                        {/* Mostrar las 132 Marcas */}
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Marca */}

                {/* --------------------- */}

                {/* Start - Material del marco */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <h5>Material del marco</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"aluminio-checkbox"}
                            label={"Aluminio"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"carbon-checkbox"}
                            label={"Carbón"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"hierro-checkbox"}
                            label={"Hierro"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"titanio-checkbox"}
                            label={"Titanio"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"cromoldy-checkbox"}
                            label={"Cromoldy"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"acero-checkbox"}
                            label={"Acero"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Material del marco */}

                {/* --------------------- */}

                {/* Start - Frenos */}
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <h5>Frenos</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"coaster-checkbox"}
                            label={"Coaster"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"disco-hidraulico-checkbox"}
                            label={"Disco - Hidráulico"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"disco-mecanico-checkbox"}
                            label={"Disco - Mecánico"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"rin-checkbox"}
                            label={"Rin"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Frenos */}

                {/* --------------------- */}

                {/* Start - Rines */}
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <h5>Rines</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"rin-24-checkbox"}
                            label={"24''"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"rin-26-checkbox"}
                            label={"26''"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"rin-27-checkbox"}
                            label={"27.5''"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"rin-29-checkbox"}
                            label={"29''"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Rines */}

                {/* --------------------- */}

                {/* Start - Año */}
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <h5>Año</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type={"checkbox"}
                            id={"2022-checkbox"}
                            label={"2022"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"2021-checkbox"}
                            label={"2021"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"2020-checkbox"}
                            label={"2020"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"2019-checkbox"}
                            label={"2019"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"2018-checkbox"}
                            label={"2018"}
                        />
                        <Form.Check
                            type={"checkbox"}
                            id={"2017-checkbox"}
                            label={"2017"}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Año */}

                {/* --------------------- */}

                {/* Start - Precio */}
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <h5>Precio</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row className="mb-3 d-flex align-items-end">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Mínimo</Form.Label>
                                <Form.Control type="number" placeholder="$" />
                            </Form.Group>
                            <Col sm="auto" className="py-2 px-0">
                                {" "}
                                -
                            </Col>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Máximo</Form.Label>
                                <Form.Control type="number" placeholder="$" />
                            </Form.Group>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                {/* End - Precio */}
            </Accordion>
        </div>
    );
}

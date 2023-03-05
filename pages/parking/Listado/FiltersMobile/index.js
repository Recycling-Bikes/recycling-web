import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col, Accordion, Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";

export default function FiltrosMobile(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      const offCanvasStyle = {
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          height: "90%",
      };

    return (
        <div {...props}>
            <Button
                variant="primary"
                onClick={handleShow}
                className="align-items-center w-100 py-2"
            >
                <BsFilter className="me-2"/>
                Filtrar / Ordenar
            </Button>
                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement={"bottom"}
                    style={offCanvasStyle}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bold">
                            Filtrar/Ordenar
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="separador">
                            <Accordion
                                defaultActiveKey={["1", "9"]}
                                flush
                                alwaysOpen
                            >
                                {/* Start - País */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="py-0">
                                        <h5 className="fw-bolder fs-6">País</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"panama-checkbox"}
                                            label={`Panamá`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"costa-rica-checkbox"}
                                            label={`Costa Rica`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"el-salvador-checkbox"}
                                            label={`El Salvador`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"honduras-checkbox"}
                                            label={`Honduras`}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - País */}

                                {/* --------------------- */}
                                {/* Start - Categoría */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="py-0">
                                        <h5 className="fw-bolder fs-6">
                                            Categoría
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"mtb-checkbox"}
                                            label={`MTB`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"ruta-checkbox"}
                                            label={`RUTA`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"urbana-checkbox"}
                                            label={`URBANA`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"gravel-checkbox"}
                                            label={`GRAVEL`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"bmx-checkbox"}
                                            label={`BMX`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"ninos-checkbox"}
                                            label={`NIÑOS`}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"accesorios-checkbox"}
                                            label={`ACCESORIOS`}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Categoría */}

                                {/* --------------------- */}

                                {/* Start - Subcategoría */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Subcategorías
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"aero-checkbox"}
                                            label={"Aero"}
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
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"escaladora-checkbox"}
                                            label={"Escaladora"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"endurance-checkbox"}
                                            label={"Endurance"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"hibrida-checkbox"}
                                            label={"Hibrida"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"viaje-checkbox"}
                                            label={"Viaje"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"crucero-checkbox"}
                                            label={"Crucero"}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Subcategoría */}

                                {/* --------------------- */}

                                {/* Start - Talla */}
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Talla
                                        </h5>
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
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"xxs-checkbox"}
                                            label={"XXS"}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Talla */}

                                {/* --------------------- */}

                                {/* Start - Marca */}
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Marca
                                        </h5>
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
                                            id={"cannondale-checkbox"}
                                            label={"Cannondale"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"canyon-checkbox"}
                                            label={"Canyon"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"cervelo-checkbox"}
                                            label={"Cervelo"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"diamond-checkbox"}
                                            label={"Diamond Back"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"electra-checkbox"}
                                            label={"Electra"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"giant-checkbox"}
                                            label={"Giant"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"liv-checkbox"}
                                            label={"Liv"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"merida-checkbox"}
                                            label={"Merida"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"niner-checkbox"}
                                            label={"Niner"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"orbea-checkbox"}
                                            label={"Orbea"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"pinarello-checkbox"}
                                            label={"Pinarello"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rali-checkbox"}
                                            label={"Rali"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rocky-mountain-checkbox"}
                                            label={"Rocky Mountain"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"s-works-checkbox"}
                                            label={"S-works"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"santa-cruz-checkbox"}
                                            label={"Santa Cruz"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"scott-checkbox"}
                                            label={"Scott"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"specialized-checkbox"}
                                            label={"Specialized"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"trek-checkbox"}
                                            label={"Trek"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"willier-triestina-checkbox"}
                                            label={"Willier Triestina"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"yeti-checkbox"}
                                            label={"Yeti"}
                                        />

                                        {/* Agregar Mostrar las 132 Marcas */}
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Marca */}

                                {/* --------------------- */}

                                {/* Start - Material del marco */}
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Material del marco
                                        </h5>
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
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Frenos
                                        </h5>
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
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Rines
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rin-12-checkbox"}
                                            label={"12''"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rin-14-checkbox"}
                                            label={"14''"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rin-16-checkbox"}
                                            label={"16''"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"rin-20-checkbox"}
                                            label={"20''"}
                                        />
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
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"600-c-checkbox"}
                                            label={"600C"}
                                        />
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"700c-checkbox"}
                                            label={"700C"}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Rines */}

                                {/* --------------------- */}

                                {/* Start - Año */}
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">Año</h5>
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
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>
                                        <h5 className="fw-bolder fs-6">
                                            Precio
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="mb-3 d-flex align-items-end">
                                            <Form.Group
                                                as={Col}
                                                controlId="formGridEmail"
                                            >
                                                <Form.Label>Mínimo</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="$ 0.00"
                                                    className="px-2"
                                                />
                                            </Form.Group>
                                            <Col
                                                sm="auto"
                                                className="py-2 px-0"
                                            >
                                                <span className="fw-bolder text-secondary d-none d-lg-block">
                                                    -
                                                </span>
                                            </Col>
                                            <Form.Group
                                                as={Col}
                                                controlId="formGridPassword"
                                            >
                                                <Form.Label>Máximo</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="$"
                                                />
                                            </Form.Group>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* End - Precio */}
                            </Accordion>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
    );
}

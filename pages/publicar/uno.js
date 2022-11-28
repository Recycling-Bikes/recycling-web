import React from 'react'
import Contenedor from 'components/home/Contenedor'
import { Row, Form, Col, Container, Button, ProgressBar } from 'react-bootstrap'
import Link from 'next/link'
import { MdOutlinePedalBike } from 'react-icons/md'
import { BsCardChecklist, BsThreeDots } from 'react-icons/bs'

export default function uno() {




    return (
        <Contenedor>

            <Container >


                <Row className="justify-content-md-center">

                    <Col md="8" xl="6" >



                        <Form className=' py-5'>
                            <div className='py-2'>

                                <Row className='my-1 d-flex '>

                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div sm="auto" >
                                                <MdOutlinePedalBike size="40" className='p-2'
                                                    style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }}
                                                />
                                            </div>
                                            <div className='px-1'>
                                                <p className='m-0 p-0' style={{ color: "#0FA899" }}>Paso 1/3</p>
                                                <p className='m-0 p-0'><strong>Datos de tu bici</strong></p>
                                            </div>
                                        </div>

                                        <>
                                            <BsCardChecklist size="40" className='p-2'
                                                style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }} />
                                        </>

                                        <>
                                            <BsThreeDots size="40" className='p-2'
                                                style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }} />
                                        </>
                                    </div>


                                </Row>
                            </div>
                            <ProgressBar now={30} className="mb-4" />

                            <div className='my-5'>



                                <Form.Group><Form.Label>Marca</Form.Label>
                                    <Form.Select className="mb-3" aria-label="Default select example">
                                        <option>Seleciona una Marca</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>


                                <Form.Group><Form.Label>Modelo</Form.Label>
                                    <Form.Select className="mb-3" aria-label="Default select example">
                                        <option>Selecciona un modelo</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group><Form.Label>Año</Form.Label>
                                    <Form.Select className="mb-3" aria-label="Default select example">
                                        <option>Selecciona un año</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>





                            <div className='d-flex justify-content-end pt-3'> <Button variant="primary" type="submit">
                                Guardar cambios
                            </Button></div>



                        </Form></Col>

                </Row>

            </Container>
            <div className='d-none d-lg-block' style={{ height: "20rem" }} ></div>


        </Contenedor>
    )
}

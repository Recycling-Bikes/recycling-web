
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md"




function Presentation() {
    return (


        <Container fluid className=''>
            <Row>
                <Col>
                    <Container className='p-4 '>
                        <Container className='p-4'>

                            <h1 className='fs-1 tittle-custom'> 
                            Transformamos la compra y venta de bicis usadas en Latinoamérica</h1>
                            <p>
                                Explora +12.000 bicicletas en nuestra plataforma
                            </p>
                            <Button variant="primary">Comprar bicis</Button>
                            <Row className='p-2 d-flex hover-custom'>
                                <Col className=''>
                                    <Link href="/" className='link-custom-text' >
                                        Vender mi bici <MdKeyboardArrowRight />
                                    </Link>

                                </Col>

                            </Row>
                        </Container>
                    </Container>

                </Col>

                <Col>
                    <div
                        className='p-5 text-center bg-image'>
                        <Card.Img variant="top" src="/Mountain.png" className='mw-50' />


                    </div>
                </Col>

            </Row>

        </Container>


    )
};

export default Presentation;
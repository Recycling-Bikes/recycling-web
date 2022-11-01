
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md"




function Presentation() {
    return (


        <Container fluid className='presentation p-5 mb-5' style={{backgroundColor: "rgba(207, 238, 235, 0.4)"}}>
            <Row className='pb-5'>
                <Col className='mx-2 d-flex flex-column justify-content-center align-items-baseline'>
                    

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


                </Col>

                <Col className='img-presentacion m-4'>
                    <div
                        className=' text-center bg-image'>
                        <Card.Img variant="top" src="/Mountain.png" className='' 
                        
                        />


                    </div>
                </Col>

            </Row>

        </Container>


    )
};

export default Presentation;
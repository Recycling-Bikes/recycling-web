
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import Link from 'next/link';
import {MdKeyboardArrowRight} from "react-icons/md"




function MainPage() {
    return (


        <Container fluid>
            <Row>
                <Col>
                    <Container className='p-4'>
                    
                        <h1 className='fs-1 tittle-custom'   > Transformamos la compra y venta de bicis usadas en Latinoamérica</h1>
                        <p>
                        Explora +12.000 bicicletas en nuestra plataforma
                        </p>
                        <Button variant="primary">Comprar bicis</Button>
                        <Row className='p-2 d-flex'>
                            <Col className=''>
                            <Link href="/" className='link-custom-text' >
                            Vender mi bici <MdKeyboardArrowRight />
                            </Link> 

                            </Col>

                        </Row>
                    </Container>

                    </Col>

                    <Col>
                        <div
                            className='p-5 text-center bg-image' sm>
                            <Card.Img variant="top" src="/Mountain.png" />


                        </div>
                    </Col>

            </Row>

        </Container>


    )
};

export default MainPage;



<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
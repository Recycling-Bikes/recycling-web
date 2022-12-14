
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md"
import { useRouter } from 'next/router';




function Presentation() {
    const router = useRouter()
    return (

        <Container className='p-5 '>
            <Row className='pb-5'>
                <Col className='mx-2 d-flex flex-column justify-content-center align-items-baseline'>

                    <h1 className='fs-1 tittle-custom'>
                        Transformamos la compra y venta de bicis usadas en Latinoamérica</h1>
                    <p>
                        Explora +12.000 bicicletas en nuestra plataforma
                    </p>
                    <Button variant="primary" onClick={() => router.push("/total")}>Comprar bicis</Button>

                    <Link href="/intermedio" className='link-custom-text pt-2 px-1' >
                        Vender mi bici <MdKeyboardArrowRight />
                    </Link>

                </Col>

                <Col className=' d-none d-lg-block m-4'>
                    <div className=' text-center bg-image'>
                        <Card.Img variant="top" src="/Mountain.png" className=''
                        />
                    </div>
                </Col>

            </Row>

        </Container>


    )
};

export default Presentation;
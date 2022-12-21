
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md"
import { useRouter } from 'next/router';




function Presentation() {
    const router = useRouter()
    return (


        <Container className=''>
            <Col   className=' m-2 pb-4  d-block d-lg-none m-1'>
                    <div md={100} className=' text-center bg-image'>
                        <Card.Img variant="top" src="/psintermedia.png" className='' 
                        style={{borderRadius: "30px" }}
                        />


                    </div>
                </Col>
            <Row className=''>

            


                <Col className='mx-2 d-flex flex-column justify-content-center align-items-baseline'>
                    

                            <h1 className='fs-1 tittle-custom'> 
                            Vende tu bici de manera fácil y segura con nosotros</h1>
                            <p className='pb-4'>
                            Publica en un mercado de más de 3.000 ciclistas
                            </p>
                            <Button className='' variant="primary" onClick={()=>{localStorage.removeItem('items'); router.push("/publicar/uno")}}>Vender tu bici ahora</Button>
                                
                                    

                                

                            


                </Col>

                <Col className=' d-none d-lg-block m-1'>
                    <div
                        className=' text-center bg-image'>
                        <Card.Img variant="top" src="/psintermedia.png" className='' 
                        style={{borderRadius: "30px 0 0 30px"}}
                        />


                    </div>
                </Col>

            </Row>

        </Container>


    )
};

export default Presentation;
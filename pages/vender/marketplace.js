
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';

import { useRouter } from 'next/router';




function Martket() {
    const router = useRouter()
    return (


        <Container className='my-4'>
            <div className=' d-block d-lg-none  p-4'/>
            
            <Row className=''>

            <Col lg={4}   className=' m-2 pb-4  d-block m-1'>
                    <div md={100} className=' text-center bg-image'>
                        <Card.Img variant="top" src="/psitermedia2.png" className='mx-2 p' 
                        style={{borderRadius: " 30px" }}
                        />


                    </div>
                </Col>

            


                <Col className='mx-4 px-2 d-flex flex-column justify-content-center align-items-baseline'>
                    

                            <h3 className=' tittle-custom'> 
                            Nuestro proceso es 100% seguro y transparente </h3>
                            <Row gap={2}>
                                <Col className='p-3' lg={5}>Revisamos y certificamos cada bicicleta y nos aseguramos de que todo está en regla.</Col>
                                <Col className='p-3' lg={5}>Revisamos y certificamos cada bicicleta y nos aseguramos de que todo está en regla.</Col>
                                <Col className='p-3' lg={5}>Revisamos y certificamos cada bicicleta y nos aseguramos de que todo está en regla.</Col>
                                <Col className='p-3' lg={5}> Revisamos y certificamos cada bicicleta y nos aseguramos de que todo está en regla.</Col>
                            </Row>
                                
                                    


                </Col>

                

            </Row>


        </Container>


    )
};

export default Martket;
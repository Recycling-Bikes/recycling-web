import React, { useContext, useEffect } from 'react'
import Contenedor from 'components/home/Contenedor'
import { Row, Form, Col, Container, Button, ProgressBar } from 'react-bootstrap'
import Link from 'next/link'
import { MdOutlinePedalBike } from 'react-icons/md'
import { BsCardChecklist, BsThreeDots } from 'react-icons/bs'
import { useRouter } from 'next/router'
import BicisContext from 'context/Bicis/BicisContext'

export default function Parttres() {

    const router = useRouter()


    const { createBici, publicacion } = useContext(BicisContext)

    const HandleSubmit = (event) => {
        const form = event.currentTarget;
  
        
  
          event.preventDefault();
  
  
  
              router.push("./cuatro")
            
             
          
  
        event.preventDefault();
        
    
    
  
        useEffect(()=>{
          const publict ={hola: "leo",
          data: {
              nombre: "Uno",
              agencia: "1",
              cantidad: "1",
          }}
  
          createBici(publict)
  
      },[])
  
      };




    return (
        <Contenedor>

            <Container >


                <Row className="justify-content-md-center">

                    <Col md="8" xl="6" >



                        <Form className=' py-5'>
                            <div className='py-2'>

                                <Row className='my-1 d-flex '>

                                    <div className='d-flex justify-content-between'>
                                        <>

                                            <MdOutlinePedalBike size="40" className='p-2'
                                                style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }}
                                            />


                                        </>

                                        <>
                                            <BsCardChecklist size="40" className='p-2'
                                                style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }} />
                                        </>

                                        <div className='d-flex'>
                                            <BsThreeDots size="40" className='p-2'
                                                style={{ borderRadius: '50%', backgroundColor: '#CFEEEB', color: '#0FA899' }} />
                                            <div className='px-1'>
                                                <p className='m-0 p-0' style={{ color: "#0FA899" }}>Paso 3/3</p>
                                                <p className='m-0 p-0'><strong>Condicon de la bici</strong></p>
                                            </div>
                                        </div>
                                    </div>


                                </Row>
                            </div>
                            <ProgressBar now={90} className="mb-4" />


                            <Form.Group className='mt-5'>
                                <Container>

                                    <div className='d-flex justify-content-evenly my-4'>
                                        <div>
                                            <Form.Check type="radio" id={`1-radio`}>
                                                <Form.Check.Input type="radio" isValid name="group1" />
                                                <Form.Check.Label>{`Excelente`}</Form.Check.Label>

                                            </Form.Check>

                                        </div>
                                        <Col sm="5" className='mx-4' >La bicicleta puede tener imperfecciones estéticas menores y su estado mecánico es como nuevo.</Col>
                                    </div>

                                    <div className='d-flex justify-content-evenly mb-4'>
                                        <div>
                                            <Form.Check type="radio" id={`2-radio1`}>
                                                <Form.Check.Input type="radio" isValid name="group1" />
                                                <Form.Check.Label>{`Excelente`}</Form.Check.Label>
                                            </Form.Check>
                                        </div>
                                        <Col sm="5" className='mx-4' >La bicicleta puede tener imperfecciones estéticas menores y su estado mecánico es como nuevo.</Col>
                                    </div>

                                    <div className='d-flex justify-content-evenly mb-4' >
                                        <div>
                                            <Form.Check type="radio" id={`3-radio`} >
                                                <Form.Check.Input type="radio" isValid name="group1" />
                                                <Form.Check.Label>{`Excelente`}</Form.Check.Label>
                                            </Form.Check>
                                        </div>
                                        <Col sm="5" className='mx-4' >La bicicleta puede tener imperfecciones estéticas menores y su estado mecánico es como nuevo.</Col>
                                    </div>

                                    <div className='d-flex justify-content-evenly mb-4'>
                                        <div>
                                            <Form.Check type="radio" id={`4-radio`}>
                                                <Form.Check.Input type="radio" isValid name="group1" />
                                                <Form.Check.Label>{`Excelente`}</Form.Check.Label>
                                            </Form.Check>
                                        </div>
                                        <Col sm="5" className='mx-4' >La bicicleta puede tener imperfecciones estéticas menores y su estado mecánico es como nuevo.</Col>
                                    </div>
                                </Container>


                            </Form.Group>






                            <div className='d-flex justify-content-end pt-3 align-items-center'>

                                <Link href="./two" className='mx-3'>Atras</Link>

                                <Button variant="primary" type="submit">
                                    Valor de tu bici
                                </Button></div>





                        </Form></Col>

                </Row>

            </Container>
            <div className='d-none d-lg-block' style={{ height: "10rem" }} ></div>


        </Contenedor>
    )
}
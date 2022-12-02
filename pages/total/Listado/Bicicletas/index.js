import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import Getbicis from './list'
import Getbicismin from './listmin'

export default function Bicicletas(

) {
    return (
        <div>
            <Card className='my-3 lg' style={{ width: 'auto' }}>
                <Card.Body>
                    <Row className=' align-items-center'> <Col>
                        <Card.Title>Guarda tu búsqueda</Card.Title>
                        <Card.Text>
                            Filtra tus resultados, y recibe una notificación cuando lleguen nuevos productos coincidentes.
                        </Card.Text></Col>
                        <Col lg="auto" className='d-grid gap-2 py-3'><Button style={{ width: 'auto' }} variant="outline-primary">Go somewhere</Button></Col>
                    </Row>

                </Card.Body>
            </Card>
            <Row className='d-none d-xl-flex align-items-center justify-content-between  ' >
                <Col sm="3" >1,940 Resultados</Col>

                <Col sm="6"><Form.Group as={Row} controlId="formGridState" className=''>
                    <Form.Label column xl="auto" >Ordenar por</Form.Label>
                    <Col xl="8" xxl="9" className='px-0 ' ><Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select></Col>
                    
                </Form.Group></Col>
            </Row>
            <Getbicis />
            <Getbicismin />
        </div>
    )
}

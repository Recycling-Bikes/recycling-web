import React from 'react'
import { Accordion, Form, Row, Col } from 'react-bootstrap'

export default function Filtro() {
  return (
    <div className='separador'>
      <Accordion defaultActiveKey={["1","0","3"]}  flush alwaysOpen>
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='py-0'><h5>Talla</h5></Accordion.Header>
        <Accordion.Body>
          
        <Form.Check 
            type={"checkbox"}
            id={`default-checkbox`}
            label={`default checkbox`}
          />
          <Form.Check 
            type={"checkbox"}
            id={`default-checkbox`}
            label={`default checkbox`}
          />
          <Form.Check 
            type={"checkbox"}
            id={`default-checkbox`}
            label={`default checkbox`}
          />
          <Form.Check 
            type={"checkbox"}
            id={`default-checkbox`}
            label={`default checkbox`}
          />

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className=' '>
        <Accordion.Header className=''><h5>Marca</h5></Accordion.Header>
        <Accordion.Body className=''>

        <Form.Check 
            type={"checkbox"}
            id={"default-checkbox"}
            label={"default checkbox"}
          />
          <Form.Check 
            type={"checkbox"}
            id={"default-checkbox"}
            label={"default checkbox"}
          />
          <Form.Check 
            type={"checkbox"}
            id={"default-checkbox"}
            label={"default checkbox"}
          />
          <Form.Check 
            type={"checkbox"}
            id={"default-checkbox"}
            label={"default checkbox"}
          />

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className=' '>
        <Accordion.Header className=''><h5>Price</h5></Accordion.Header>
        <Accordion.Body className=''>

        <Row className="mb-3 d-flex align-items-end">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Minimo</Form.Label>
          <Form.Control type="number" placeholder="$" /> 
        </Form.Group>
            <Col sm="auto" className='py-2 px-0'> -</Col>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Maximo</Form.Label>
          <Form.Control type="number" placeholder="$" />
        </Form.Group>
      </Row>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

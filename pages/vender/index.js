import React from 'react'
import Contenedor from 'components/Contenedor'
import Article from "../Home/Article";
import Descriptons from './vender';
import { Container, Row, Col } from 'react-bootstrap';
import Carractristicas from './Caracteristicas';
import Vista from "./Vista"

export default function Vender() {
  return (
    <Contenedor>
      <Container > 
      <Row className='d-flex justify-content-center'>
        <Row>
          <Col sm="" className='pb-4' ><Vista/>
          <Carractristicas />
          </Col>
          <Col  sm="100" md="100" lg="5" xl="5" xxl="4" ><Descriptons/></Col>
          
          </Row>
        
        
      </Row>
      </Container>

      <Article Title="Explora más bicis" />
    </Contenedor>
  )
}

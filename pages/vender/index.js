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
          <Col className='pb-4' ><Vista/>

          <div className=" d-lg-none   "><Descriptons/></div>

          <Carractristicas />

          </Col >
          <Col  sm="100" md="auto" lg="5" xl="5" xxl="4" className="d-none d-lg-block" ><Descriptons/></Col>
          
          </Row>
        
        
      </Row>
      </Container>

      <Article Title="Explora más bicis" />
    </Contenedor>
  )
}

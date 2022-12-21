import React from 'react'
import Contenedor from 'components/home/Contenedor'
import Article from "../Home/Article";
import Descriptons from 'components/publicacion/vender';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Carractristicas from 'components/publicacion/Caracteristicas';
import Vista from "components/publicacion/Vista"
import { useRouter } from 'next/router'
import {useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import BicisContext from 'context/Bicis/BicisContext';




 function Page({id}) {

  let{getBici, bici}=useContext(BicisContext)

  
  const {isLoading,} =useQuery({
    queryKey: ["producto"],
    queryFn: getBici(id),
  })



  if (bici.id? false :true) {

    if(isLoading){
      return <Spinner animation="border" variant="secondary" style={{width: "200px", height: "200px" , fontSize: "90px"}} />
    }
    return <h1> Error 404</h1>
  }

  
  return (
    <>
    <Container >
    <Row className='d-flex justify-content-center'>
      <Row>
        <Col className='pb-4' ><Vista />

          <div className=" d-lg-none   "><Descriptons /></div>

          <Carractristicas />

        </Col >
        <Col sm="100" md="auto" lg="5" xl="5" xxl="4" className="d-none d-lg-block" ><Descriptons /></Col>

      </Row>


    </Row>
  </Container>

  <Article Title="Explora más bicis" />
  </>
  )
}

 const Vender = () => {
  const router = useRouter()
  const { id } = router.query
  return (
  <Contenedor>
    <Page id={id}/>
</Contenedor>
  )
}



export default Vender;

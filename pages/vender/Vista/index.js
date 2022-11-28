/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, Row,Col } from 'react-bootstrap'


export default function Vista() {

  const listLink = ["/Mountain.png", "/segundavista.png"]
    
  const [primaryVista, setPrimaryVista] = useState(listLink[1])

    


  return (
    <>

    <Row className='mt-4'>
        <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    </Row>
    <Row>
      <Col md="1">



        {listLink.map(links => <img src={links} key={links} width={50} height={50} className="m-2" onClick={() => setPrimaryVista(links)}/>

            
        )}
      </Col>
      <Col>
      <Container>
        <img src={primaryVista} className="img-fluid"/>
        </Container>
      </Col>
    </Row>
    </>
  )
}

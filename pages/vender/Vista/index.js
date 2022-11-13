/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, Row,Col } from 'react-bootstrap'


export default function Vista() {
    const [primaryVista, setPrimaryVista] = useState("/Mountain.png")

    const listLink = ["/Mountain.png", "/segundavista.png", "/tercera.png"]


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



        {listLink.map(link => {

            <img src="link" width={50} height={50} className="m-2" />
            console.log(link)
        })}

      hola
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

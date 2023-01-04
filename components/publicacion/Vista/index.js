/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import { Container, Breadcrumb, Row,Col, Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types'
import BicisContext from 'context/Bicis/BicisContext'
import Image from 'next/image'

export default function Vista()  {
  const {bici, CDN} = useContext(BicisContext)
  

  const listLink = bici.filesUrl ? bici.filesUrl : []


  const [primaryVista, setPrimaryVista] = useState([])


  useEffect(()=>{

    setPrimaryVista( listLink[0]? listLink[0] : [""] )

  },[listLink])

  return (
    <>

    <Row className='mt-4'>
        <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/parking">
        Parking
      </Breadcrumb.Item>
      <Breadcrumb.Item active>SKU: {bici.id}</Breadcrumb.Item>
    </Breadcrumb>

    </Row>
    <Row>
      <Col md="2" className='d-none d-lg-block' >

        {listLink.map(links => <Image src={CDN + links} alt="" key={links} width={50} height={50} className="m-2 cover" onClick={() => setPrimaryVista(links)} />)}

      </Col>
      <Col className='d-none d-lg-block'>
      <Container >
        <img src={CDN + primaryVista} className="img-fluid p-0" />
        </Container>
      </Col>

      <Col className='d-lg-none' >
      <Carousel>
      {listLink.map(links => <Carousel.Item key={links}>
        <img src={CDN + links}
          className="d-block w-100"
          alt="First slide"
        />
      </Carousel.Item>
      )}
      
    </Carousel></Col>
    </Row>
    </>
  )
}

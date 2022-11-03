/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { Container, Image } from 'react-bootstrap'

export default function Formimg() {
  return (
    
        <Container fluid="true">
        <Image src="/loginimg.png" className='img-fluid img-presentacion' style={{height: "-webkit-fill-available", width: "90vh",}}/>


        <Image
              src="/recycling.png"
              className="   img-fluid"
              alt="React Bootstrap logo"
              style={{position: "absolute",
                left: "2.72vw",
                top: "2.12vw",
                height: "5vh"}}
            />
        </Container>
  )
}

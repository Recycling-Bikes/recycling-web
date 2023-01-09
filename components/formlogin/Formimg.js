/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Link from 'next/link'

export default function Formimg() {
  return (
    
        <Container fluid="true">
        <Image src="/loginimg.png" alt='' className='d-none d-xl-block' style={{maxHeight: "100vh"}}/>

        <Link href="/" passHref>
        <Image
              src="/recycling.png"
              className="   img-fluid"
              alt="React Bootstrap logo"
              style={{position: "absolute",
                left: "2.72vw",
                top: "2.12vw",
                height: "5vh",
                }}

            />
          </Link>
            
        </Container>
        
  )
}

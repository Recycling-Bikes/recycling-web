import React from 'react'
import Head from 'next/head'
import { Container, SSRProvider } from 'react-bootstrap'
import Formnav2 from './Formnav2'
import Formfooter from './Formfooter'
import Formimg from './Formimg'

export default function Register(props) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/mesa.png" />
                <title>Recycling</title>
            </Head>

            <SSRProvider>
            <div className='d-flex flex-row' style={{height: "-webkit-fill-available"}}>
                <Formimg />
                <div style={{width: "100%",
                    width: "-moz-available fill-available",
                    width: "fill-available",
                    width: "-webkit-fill-available",}} >

                <Formnav2 />

                <Container className='d-flex flex-column justify-content-center align-content-center align-items-center' style={{height: "90vh"}}>
                {props.children}
                </Container>

                <Formfooter />
                </div>

            </div>
            </SSRProvider>

        </>
    )
}

import Link from 'next/link'
import React from 'react'
import { Container, Button, Accordion } from 'react-bootstrap'

export default function Descriptons() {
    return (
        <Container className='py-3 mx-3 d-flex flex-column'>
            <h2>Specialized Aethos Pro SRAM Force eTap AXS Road Bike - 2021, 56cm</h2>
            <p>SKU: 1AE9C3B33D1F</p>

            <p className='mb-0 '>Altura recomendada del ciclista: <strong>1,77m - 1,85m</strong></p>
            <Link href="#">Guia de tallas</Link>
            <h2 className='my-4'>$6,499</h2>

            <Button className='mb-2'>Añadir al carrito</Button>
            <Button className='mb-2' variant="outline-primary">Trade - in</Button>
            <div className='d-flex justify-content-center'><h6>Dudas sobre la bici? <Link href="#"> Pregúntanos</Link></h6></div>

            <Accordion className='mt-3 separador' defaultActiveKey="0" flush >
                <Accordion.Item eventKey="1" className='separador'>
                    <Accordion.Header>Envío y ensamblaje</Accordion.Header>
                    <Accordion.Body>ñ
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Garantía</Accordion.Header>
                    
                    <Accordion.Body>
                    <Link href="#">Recycling Certified - 12 meses</Link>
                        <p>Esta bicicleta ha sido inspeccionada y certificada por nuestros expertos mecánicos.<br/>
                        <br/>
                        Nuestro servicio de guante blanco incluye una puesta a punto de transmisión, frenos y dirección. Los consumibles desgastados como cadena, pastillas de freno, cubiertas o cableado son reemplazados por otros nuevos si han llegado al final de su vida útil</p>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}


import Link from 'next/link'
import React from 'react'
import { Card, Badge, Row, Col } from 'react-bootstrap'

export default function Getbicis() {
    const width = "16.8rem"
    const clase = "m-2 p-0"
    const dato = ["21331", "2", "3", "4", "5", "6", "7", "8"]
    return (

        <Row className='my-4 d-none d-md-flex  ' >
            {dato.map(id => <Card style={{ width: width }} className={clase} key={id}  >
                    <Link href="#">
                        <div className='m-3'>
                            <Badge bg="primary" style={{color: "white"}} >Popular</Badge>
                            <Card.Img variant="top" src="/imagec.png" />
                        </div>
                        <Card.Body>
                            <Card.Text style={{color: "rgba(108, 117, 125, 1)"}} >
                                MTB · COLOMBIA
                            </Card.Text>
                            <Card.Title style={{color: "black"}}>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                            <Card.Text style={{color: "rgba(108, 117, 125, 1)"}}>
                                $6,499
                            </Card.Text>


                        </Card.Body>
                    </Link>
                </Card>

            )}
        </Row>
    )
}

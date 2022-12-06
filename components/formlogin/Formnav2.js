import Link from 'next/link'
import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Formnav() {
    return (
        <Link href="/form/register">
        <Container fluid className='d-flex flex-row-reverse my-2 align-items-baseline '>
            <Button variant="primary" type="submit" className='mx-2'>
                Regístrate
            </Button>
            <p href="./register" style={{ color: "black" }}>¿Aún no tienes cuenta?</p>

        </Container>
        </Link>
    )
}
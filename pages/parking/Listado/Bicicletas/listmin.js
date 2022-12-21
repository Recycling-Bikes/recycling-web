import Link from 'next/link'
import React from 'react'
import { Card, Badge, Row} from 'react-bootstrap'
import Bicis from './bicis'

export default function Getbicismin() {
    const width = "auto"
    const clase = "mx-5 my-2"

    return (

        <Row className='my-4 justify-content-center d-md-none mx-3'>
            <Bicis width={width} clase={clase} />
        </Row>
    )
}
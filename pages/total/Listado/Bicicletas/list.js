
import React from 'react'
import { Row} from 'react-bootstrap'
import Bicis from './bicis'

export default function Getbicis() {
    const width = "16.8rem"
    const clase = "m-2 p-0"

    return (

        <Row className='my-4 d-none d-md-flex' >
            <Bicis width={width} clase={clase} />
        </Row>
    )
}

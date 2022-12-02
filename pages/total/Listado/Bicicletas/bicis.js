
import { Card, Badge } from 'react-bootstrap'
import Link from 'next/link'
import BicisContext from 'context/Bicis/BicisContext';
import React, {useContext, useEffect } from 'react';

export default function Bicis({width, clase}) {
    
    useEffect(() =>{
    let{bicis, getBicis}=useContext(BicisContext)
    getBicis()


    },[])

    bicis = bicis ? bicis : []
    bicis = bicis != null ? bicis : []
    
    
    console.log(bicis)
    
  return (
    <>
    {bicis.map(id => <Card style={{ width: width }} className={clase} key={id}  >
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
</>
  )
}

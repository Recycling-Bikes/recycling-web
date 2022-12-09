
import { Card, Badge } from 'react-bootstrap';
import Link from 'next/link';
import BicisContext from 'context/Bicis/BicisContext';
import React, {useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';


export default function Bicis({width, clase}) {

    

    let{getBicis}=useContext(BicisContext)

    

    const {isLoading, isErrorn, error, data} =useQuery({
        queryKey: ["productos"],
        queryFn: getBicis
    })
    

    if (isLoading) {
        return <>{"hola"}</>
    }
    
    console.log(data)
    
  return (
    <>
    {data.map((bici) => <Card style={{ width: width }} className={clase} key={bici.id}  >
        <Link href={`/total/${bici.id}`}>
            <div className='m-3'>
                <Badge bg="primary" style={{color: "white"}} >Popular</Badge>
                <Card.Img variant="top" src="/imagec.png" />
            </div>  
            <Card.Body>
                <Card.Text style={{color: "rgba(108, 117, 125, 1)"}} >
                    {bici.Modelo}
                </Card.Text>
                <Card.Title style={{color: "black"}}>{bici.Title}</Card.Title>
                <Card.Text style={{color: "rgba(108, 117, 125, 1)"}}>
                    ${bici.Valor}
                </Card.Text>


            </Card.Body>
        </Link>
    </Card>

)}
</>
  )
}

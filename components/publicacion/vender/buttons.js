import { parkingState } from "context/Parking/ParkingState";
import Link from "next/link";
import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { BsChatSquareDots } from "react-icons/bs";

export default function Buttons() {
  const bici = parkingState((state) => state.bici);

  const dataSize=useCallback((id, sizeNormal, sizeRuta )=>{
    if (id != 2) {
      return sizeNormal ? sizeNormal : ""
    }
    return sizeRuta ? sizeNormal : "" 
  },[])

  const size = dataSize(bici?.category?.id, bici?.size?.relacion, bici?.size?.ruta)

  return (
    <>
      <h2>{bici.title}</h2>
      <p className="text-secondary">SKU: {bici?.id}</p>

      <p className="mb-0 text-secondary ">
        Altura recomendada del ciclista:{" "}
        <strong className="text-black">{size}</strong>
      </p>
      <Link href="#">Guía de tallas</Link>
      <h2 className="my-4">${bici.price.toLocaleString("en")}</h2>
      <Link
        target="_blank"
        className="d-flex"
        href={`https://wa.me/50769240795?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20si%20la%20bicicleta%20con%20identificador%20${bici.id}%20est%C3%A1%20disponible%20para%20su%20compra.%20%C2%BFPodr%C3%ADa%20confirmar%20si%20est%C3%A1%20disponible%20y%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20caracter%C3%ADsticas%20y%20precio%3F%20Gracias.%0Ahttps%3A%2F%2Frecyclingbikes.co%2Fparking%2F${bici.id}`}
      >
        <Button className="mb-2 py-2 w-100">Comprar</Button>
      </Link>
      {/* <Button className="mb-2" variant="outline-primary btn-outline">
        Trade - in
      </Button> */}
      <div className="mt-3 d-flex justify-content-center">
        <h6 className="fw-bold">
          <BsChatSquareDots className="me-2" />
          Dudas sobre la bici?{" "}
          <Link href="#" className="fw-normal">
            {" "}
            Pregúntanos
          </Link>
        </h6>
      </div>
    </>
  );
}

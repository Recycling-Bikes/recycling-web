import { parkingState } from "context/Parking/ParkingState";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Row, Modal, Form } from "react-bootstrap";
import { BsChatSquareDots } from "react-icons/bs";
import useUserRole from "hooks/roleAdmin/roleAdmin";
import toast, { Toaster } from "react-hot-toast";
import {
  uploadImage,
  publishPostInstagram,
} from "services/PublishPostInstagram";
import { CDN } from "utils/constantes";

export default function Buttons() {

  const bici = parkingState((state) => state.bici);

  const role = useUserRole();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const dataSize = useCallback((id = 1, sizeNormal = "", sizeRuta = "") => {
    if (id != 2) {
      return sizeNormal ?? "";
    }
    return sizeRuta ?? "";
  }, []);

  const size = dataSize(
    bici?.category?.id,
    bici?.size?.relacion,
    bici?.size?.ruta
  );

  const [price, setPrice] = useState(bici.off ?? bici?.price);

  function Descuento(original, off) {
    const descuento = original - off;
    const porcentaje = ((descuento / original) * 100).toFixed(0);

    if (porcentaje == 100) {
      return 99;
    }

    return porcentaje;
  }

  const [tags, setTags] = useState(
    "#bici #bicicleta #bike #bicycle #ciclismo #ciclista #cycling #mtb #bicicletas #bikes #ciclistas #bikelife #ciclismodecarretera #ciclismomtb #ciclis",
  );
  const [pass, setPass] = useState(`Forma de pago: 
  * De contado.
  * Abonos: Reserva con el 30%, 4 meses de plazo para terminarla de pagar.
  Envios a todo el pais:
  * Gratis en ciudad de Panamá.
  * $20.90 a cualquier otra provincia
  `);

  const [legal, setLegal] = useState(`Cabe recordar que Recycling Inc es una empresa intermediaria para la venta de productos de ciclismo. Una vez que se completa la venta, solo entregamos el dinero al propietario anterior después de recibir el producto satisfactoriamente  en nuestro showroom, por lo que garantizamos la seguridad para su comprador.
  Si deseas realizar la compra de este producto puedes contactarnos al +507 69240795.
  ♻🚲♻🚲♻🚲♻🚲♻🚲♻
  
  
  
  
  `)
  const [selectTitle, setSelectTitle] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [selectOne, setSelectOne] = useState('');

  const handleSelectOption = (event) => {
    const options = event.target.value;
    setSelectOne(options);
    handleTitle();
  }
  const handleContentPass = (e) => {
    e.preventDefault()
    setPass(e.target.value);
  }

  const handleContentTags = (e) => {
    e.preventDefault()
    setTags(e.target.value);
  }
  const handleLegal = (e) => {
    e.preventDefault()
    setLegal(e.target.value);
  }
  

  const handleTitle = () => {
    const options = selectOne;

    // titulos 
    const titleOpcions = {
      opcion1: `🟣🟣🟣🟣 DESCUENTO 🟣🟣🟣🟣`,
      opcion2: `🟣🟣🟣🟣 BICI USADA 🟣🟣🟣🟣`,
    }

    // validad que opcion es
    if (options == 1) {
      setSelectTitle(titleOpcions.opcion1)
    } else if(options == 2) {
      setSelectTitle(titleOpcions.opcion2)
    } 
    

  }
  useEffect(() => {
    handleTitle();
  }, [selectOne])


  const ig_user_id = process.env.NEXT_PUBLIC_INSTAGRAM_IG_USER_ID;
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const image_url = `${CDN}${bici?.filesUrl?.[0]}`;
  const caption = `${selectTitle}

   ${bici?.title}


   ${price} 

   ${pass} 

   ${legal} 

   ${tags}  `;

  // funcionalidad para publicar en Instagram
  async function publicar() {
    const result = await uploadImage(
      image_url,
      access_token,
      ig_user_id,
      caption,
    );
    await publishPostInstagram(result, access_token, ig_user_id);
  }

  const handlePublish = async () => {
    setPublishing(true);
    try {
      await publicar();
      handleClose(); // cerrar el modal despues de publicar
    } catch (error) {
      toast.error("Error al publicar", error);
      console.log(error)
    } finally {
      setPublishing(false);
    }
  };



  return (
    <>
      <h2>{bici?.title}</h2>
      <p className="text-secondary">SKU: {bici?.id}</p>

      <p className="mb-0 text-secondary ">
        Altura recomendada del ciclista:{" "}
        <strong className="text-black">{size}</strong>
      </p>
      <Link href="#">Guía de tallas</Link>
      <h2 className="my-4">
        <Row>
          {bici?.off ? (
            <>
              {" "}
              <span className="text-decoration-line-through text-secondary">
                ${bici?.price?.toLocaleString("en")}
              </span>{" "}
            </>
          ) : (
            ""
          )}
        </Row>
        ${price?.toLocaleString("en")}{" "}
        {bici?.off ? (
          <>
            <span
              style={{
                color: "#0fa899",
              }}
            >
              {Descuento(bici.price, bici.off)}% off
            </span>
          </>
        ) : (
          ""
        )}
      </h2>
      <Link
        target="_blank"
        className="d-flex"
        href={`https://wa.me/50769240795?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20si%20la%20bicicleta%20con%20identificador%20${bici.id}%20est%C3%A1%20disponible%20para%20su%20compra.%20%C2%BFPodr%C3%ADa%20confirmar%20si%20est%C3%A1%20disponible%20y%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20caracter%C3%ADsticas%20y%20precio%3F%20Gracias.%0Ahttps%3A%2F%2Frecyclingbikes.co%2Fparking%2F${bici.id}`}
      >
        <Button className="mb-2 py-2 w-100">Comprar</Button>

        
      </Link>
      {
        role === 'super-admin' ? (
        <Button className="mb-2" variant="outline-primary btn-outline" onClick={handleShow}>
        Republicar en META {bici?.title}
        </Button> 
        ) : null
      }
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


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{bici?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`${CDN}${bici?.filesUrl?.[0]}`}
            alt={bici?.title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Form> <br/>
          <Form.Select aria-label="Default select example" value={selectOne} onChange={handleSelectOption} >
            <option>Que tipo de publicacion es ?</option>
            <option value="1" >Descuento</option>
            <option value="2" >Bici usada</option>
          </Form.Select>
          {
            selectOne == 1 ? (
              <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>

                <Form.Control type="text" placeholder={selectTitle} value={selectTitle} onChange={ handleTitle}   />

                <Form.Label>precio antes</Form.Label>
                <Form.Control type="text" placeholder={bici?.price} disabled aria-label="Disabled input example" />

                <Form.Label>precio ahora</Form.Label>
                <Form.Control type="text" placeholder={`${bici.price, bici.off} % off`} />

                <Form.Label>formas de pago</Form.Label>
                <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

                <Form.Label>Legalidades y avisos</Form.Label>
                <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

                <Form.Label>etiquetas</Form.Label>
                <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />

              </Form.Group>
            ) : selectOne == 2 && (
              <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>
                <Form.Control type="text" placeholder={off} value={selectTitle} onChange={handleTitle}   />

                <Form.Label>precio</Form.Label>
                <Form.Control type="text" placeholder={price} disabled aria-label="Disabled input example" />


                <Form.Label>formas de pago</Form.Label>
                <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

                <Form.Label>Legalidades y avisos</Form.Label>
                <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

                <Form.Label>etiquetas</Form.Label>
                <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />
              </Form.Group>
            )
          }
          

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handlePublish}
            disabled={publishing}
          >
            {publishing ? "Publicando..." : "Publicar en Instagram"}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

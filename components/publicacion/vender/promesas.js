import { parkingState } from "context/Parking/ParkingState";
import React, { useState } from "react";
import {Button, Accordion, Modal, Form } from "react-bootstrap";
import { BsShieldCheck } from "react-icons/bs";
import useCustomHook from "hooks/instaPublish/TemplateInstaPublish";
import {
  uploadCarouselItems,
  createCarouselContainer,
  publishCarousel,
} from "services/PublishPostInstagram";
import toast, { Toaster } from "react-hot-toast";
import { CDN } from "utils/constantes";
import ModalShow from "../../main/modalShow";
import { get } from "http";

export default function Promesas() {
  const bici = parkingState((state) => state.bici);
  const {getUser, isAdmin} = userState((state) => state);
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const {
    tags,
    pass,
    legal,
    selectTitle,
    publishing,
    setPublishing,
    selectOne,
    handleSelectOption,
    handleContentPass,
    handleContentTags,
    handleLegal,
    handleTitle
    
  } = useCustomHook();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [price, setPrice] = useState(bici.off ?? bici?.price);

  const administrador = getUser();

  const [role, setRole] = useState(false);


  if (isAdmin) {
    setRole(true)
  }

  // array para las imagenes
  const images = bici?.filesUrl?.map((image) => {
    return `${CDN}${image}`;
  })


  const ig_user_id = process.env.NEXT_PUBLIC_INSTAGRAM_IG_USER_ID;
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const image_urls = images;
  const caption = `${selectTitle}

   ${bici?.title}


   $ ${price} 

   ${pass} 

   ${legal} 

   ${tags}`;

  // funcionalidad para publicar en Instagram
  async function publicar() {
    const media_ids = await Promise.all(
      image_urls.map(async(image_url) => {
        return await uploadCarouselItems(image_url, access_token, ig_user_id, caption)
      })
    );

    const carousel_id = await createCarouselContainer(media_ids, access_token, ig_user_id, caption);
    await publishCarousel(carousel_id, access_token, ig_user_id);
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
    <Accordion className="mt-3 separador" defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1" className="separador">
        <Accordion.Header>
          <span className="fw-bold">Envío y ensamblaje</span>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Entregamos nuestros productos tanto en la ciudad de Panamá como en
            todas las provincias de Panamá. Nos esforzamos por alcanzar cada
            rincón de nuestro país para asegurar que nuestros clientes tengan
            acceso a nuestros productos.
          </p>
          <p>También puedes recoger tu producto en nuestro showroom.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="fw-bold">Garantía</span>
        </Accordion.Header>

        <Accordion.Body>
          {/*           <Link href="#">
            <BsShieldCheck className="me-2" />
            Recycling Certified - 12 meses
          </Link> */}
          <p className="mt-2">
            {bici.verified ? (
              <>
                <span className=" text-primary mb-2 d-flex align-items-center">
                  <BsShieldCheck className="me-2" />
                  Certificado Recycling
                </span>
                <p>
                  En Recycling nos enorgullece ofrecerte las mejores bicicletas
                  usadas verificadas mecánicamente, y para que estés
                  completamente seguro de tu compra, te ofrecemos una garantía
                  de 30 días en nuestras bicicletas con el sello de verificado.
                </p>
                {showMore && (
                  <>
                    <p>
                      Nuestro equipo de expertos mecánicos se asegura de que
                      cada bicicleta sea inspeccionada minuciosamente en cada
                      uno de los 87 puntos clave para garantizar su óptimo
                      rendimiento y seguridad en la carretera. Solo aquellas
                      bicicletas que pasan nuestro riguroso protocolo reciben
                      nuestro sello de verificado.
                    </p>
                    <p>
                      ¿Cómo funciona? Si durante los primeros 30 días desde la
                      fecha de compra experimentas algún problema mecánico con
                      tu bicicleta verificada, simplemente tráela de vuelta a
                      nuestra tienda y nuestro equipo de expertos la
                      inspeccionará de inmediato. Si el problema se debe a un
                      defecto de material o mano de obra, nos encargaremos de
                      repararla o reemplazarla sin costo adicional para ti.
                    </p>
                    <p>
                      Ten en cuenta que nuestra garantía cubre únicamente
                      defectos mecánicos y no cubre daños causados por
                      accidentes, abuso o negligencia, uso inapropiado o
                      desgaste normal de las piezas y componentes de la
                      bicicleta debido al uso.
                    </p>
                  </>
                )}
                <Button
                  variant="link"
                  className="text-decoration-none p-0"
                  onClick={handleToggle}
                >
                  {showMore ? "Leer menos" : "Leer más"}
                </Button>
              </>
            ) : (
              <>
                Esta bicicleta será revisada antes de su entrega, para validar
                que el cuadro no tenga fisuras ni hayan piezas rotas.
              </>
            )}
          </p>
          <hr className="text-secondary" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <p>Merketing</p>

    {/* {
      role === 'super-admin' ? (
        <Button className="mb-2" variant="outline-primary btn-outline" onClick={handleShow}>
        Republicar en META {bici?.title}
        </Button> 
        ) : null
      } */}

      <ModalShow
        image={`${CDN}${bici?.filesUrl[0]}`} 
        title={bici?.title}
        selectOne={selectOne}
        selectTitle={selectTitle}
        priceDescount={`${bici.price, bici.off} % off`}
        price={bici?.price}
        pass={pass}
        legal={legal}
        tags={tags}
        handleTitle={handleTitle}
        handleContentPass={handleContentPass}
        handleContentTags={handleContentTags}
        handleLegal={handleLegal}
        handlePublish={handlePublish}
        handleClose={handleClose}
        publishing={publishing}
        show={show}
        handleSelectOption={handleSelectOption}
      />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

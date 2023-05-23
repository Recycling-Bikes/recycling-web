import { parkingState } from "context/Parking/ParkingState";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Button, Accordion } from "react-bootstrap";
import { BsShieldCheck } from "react-icons/bs";

export default function Promesas() {
  const bici = parkingState((state) => state.bici);
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
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
  );
}

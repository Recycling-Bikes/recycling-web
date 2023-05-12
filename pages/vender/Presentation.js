import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import PopLogin from "./modal";
import { userState } from "context/User/UserState";
import { useState } from "react";

function Presentation() {
  const [ModalShow, setModalShow] = useState(false);
  const router = useRouter();
  const confirmUser = userState((state) => state.confirmUser);

  const userStatus = async () => {
    const { user } = await confirmUser();

    user ? router.push("/publicar/uno") : setModalShow(true);
  };

  return (
    <>
      <Container className="mt-3">
        <Col className=" m-2 pb-4  d-block d-lg-none m-1">
          <div md={100} className=" text-center bg-image">
            <Card.Img
              variant="top"
              src="/psintermedia.png"
              className="rounded-5"
              // style={{ borderRadius: "30px" }}
            />
          </div>
        </Col>
        <Row className="">
          <Col className="mx-2 d-flex flex-column justify-content-center align-items-baseline">
            <h1 className="fs-1 tittle-custom">
              Vende tu bici de manera fácil y segura con nosotros
            </h1>
            <p className="pb-4 fw-semibold">
              Publica en un mercado de más de 50 mil usuarios.
            </p>
            <Button className="" variant="primary" onClick={userStatus}>
              Vender bici ahora
            </Button>
          </Col>

          <Col className=" d-none d-lg-block m-1">
            <div className=" text-center bg-image">
              <Card.Img
                variant="top"
                src="/psintermedia.png"
                className="rounded-5"
                // style={{ borderRadius: "30px" }}
              />
            </div>
          </Col>
          <PopLogin
            ModalShow={ModalShow}
            setModalShow={setModalShow}
            router={"/publicar/uno"}
          />
        </Row>
      </Container>

      {/* Es Rapido y Sencillo */}
      <Container></Container>
    </>
  );
}

export default Presentation;

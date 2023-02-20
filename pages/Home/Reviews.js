import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FcGoogle } from "react-icons/fc";
import {
    BsStarFill,
    BsShieldFillCheck,
    BsBoxArrowUpRig,
    BsBoxArrowUpRight,
} from "react-icons/bs";

import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import React from "react";
import Link from "next/link";

function Reviews(props) {
    let cardswight = "auto";

    return (
        <Container className="px-2 my-2 mt-5">
            <Container>
                <h2 className="tittle-custom mb-4">
                    Conoce lo que miles de ciclistas dicen de nosotros
                </h2>

                <Swiper
                    className="py-2"
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1.05,
                            spaceBetween: 30,
                        },
                        576: {
                            slidesPerView: 1.15,
                            spaceBetween: 40,
                        },

                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                        },

                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },
                        1400: {
                            slidesPerView: 2.75,
                            spaceBetween: 40,
                        },
                    }}
                    slidesPerView="auto"
                >
                    <SwiperSlide>
                        {" "}
                        <Card style={{ width: cardswight }}>
                            <Card.Body style={{ fontSize: 16 }}>
                                <div className="d-flex justify-content-between ">
                                    <div
                                        style={{ color: "gray" }}
                                        className="d-flex align-items-center "
                                    >
                                        <FcGoogle size={18} className="mr-1" />{" "}
                                        <p className="d-flex mx-1 align-items-center m-0">
                                            Google Reviews
                                        </p>
                                    </div>
                                    <Card.Text>Hace un mes</Card.Text>
                                </div>
                                <Row>
                                    <div style={{ width: "auto" }}>
                                        {" "}
                                        <Image
                                            alt=""
                                            src="/person.png "
                                            style={{ width: "50px" }}
                                        />
                                    </div>
                                    <Col>
                                        <div
                                            style={{
                                                color: "rgba(255, 193, 7, 1)",
                                            }}
                                        >
                                            <BsStarFill /> <BsStarFill />{" "}
                                            <BsStarFill /> <BsStarFill />{" "}
                                            <BsStarFill />
                                        </div>
                                        <Card.Title style={{ fontSize: 16 }}>
                                            {'"'}Excelente servicio, muy buena
                                            asesoría y venta rápida y lo más
                                            importante todo claro y sin
                                            tramuñas. Sigan de esta forma y
                                            llegarán lejos.
                                            {'"'}
                                        </Card.Title>
                                        <Card.Text style={{ color: "gray" }}>
                                            Reinaldo Calojero
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    {" "}
                                    <Link
                                        //Link original de todas las reviews + _blank
                                        href="https://www.google.com/search?q=recycling+pty+reviews&sxsrf=AJOqlzXcDs1l6ISn8olyOBEe-UO3XdTSlA%3A1676638734699&ei=DnrvY-KpKuSo1sQPw5a7wAY&oq=recycling+PTY+re&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgQIIxAnMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDIGCAAQFhAeMgYIABAWEB4yCQgAEBYQHhDxBDIJCAAQFhAeEPEEMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDoKCAAQRxDWBBCwAzoKCAAQ8QQQHhCiBDoFCAAQogQ6CAgAEIAEEMsBOgYIIxAnEBM6CwgAEIAEELEDEIMBOgUIABCABEoECEEYAFCaA1iBTGDMVWgDcAF4AYAB8gSIAeAhkgEJMi01LjUuMi4xmAEAoAEByAEHwAEB&sclient=gws-wiz-serp#lrd=0x8faca7cbe870317b:0xd9b358867bc19d5,1,,,,"
                                        target="_blank"
                                        className="d-flex flex-row-reverse align-items-center"
                                        style={{
                                            color: "rgba(25, 135, 84, 1)",
                                            fontSize: 14,
                                        }}
                                    >
                                        {" "}
                                        <div className="d-flex gap-1 align-items-center">
                                            <BsShieldFillCheck /> Ir a las
                                            reseñas
                                            <BsBoxArrowUpRight className="ms-1" />
                                        </div>{" "}
                                    </Link>
                                </Row>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        {" "}
                        <Card style={{ width: cardswight }}>
                            <Card.Body style={{ fontSize: 16 }}>
                                <div className="d-flex justify-content-between ">
                                    <div
                                        style={{ color: "gray" }}
                                        className="d-flex align-items-center "
                                    >
                                        <FcGoogle size={18} className="mr-1" />{" "}
                                        <p className="d-flex mx-1 align-items-center m-0">
                                            Google Reviews
                                        </p>
                                    </div>
                                    <Card.Text>Hace un mes</Card.Text>
                                </div>
                                <Row>
                                    <div style={{ width: "auto" }}>
                                        {" "}
                                        <Image
                                            alt=""
                                            src="/person.png "
                                            style={{ width: "50px" }}
                                        />
                                    </div>
                                    <Col>
                                        <div
                                            style={{
                                                color: "rgba(255, 193, 7, 1)",
                                            }}
                                        >
                                            <BsStarFill /> <BsStarFill />{" "}
                                            <BsStarFill /> <BsStarFill />
                                        </div>
                                        <Card.Title style={{ fontSize: 16 }}>
                                            {'"'}Mi primera vez comprando una
                                            bicicleta, super sencillo de buscar
                                            en su pagina web, tienen muchas
                                            opciones y lo mejor es que se evita
                                            estafas. Gracias ReCycling!{'"'}
                                        </Card.Title>
                                        <Card.Text style={{ color: "gray" }}>
                                            Carlos Marquez
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    {" "}
                                    <Link
                                        //Link original de todas las reviews + _blank
                                        href="https://www.google.com/search?q=recycling+pty+reviews&sxsrf=AJOqlzXcDs1l6ISn8olyOBEe-UO3XdTSlA%3A1676638734699&ei=DnrvY-KpKuSo1sQPw5a7wAY&oq=recycling+PTY+re&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgQIIxAnMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDIGCAAQFhAeMgYIABAWEB4yCQgAEBYQHhDxBDIJCAAQFhAeEPEEMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDoKCAAQRxDWBBCwAzoKCAAQ8QQQHhCiBDoFCAAQogQ6CAgAEIAEEMsBOgYIIxAnEBM6CwgAEIAEELEDEIMBOgUIABCABEoECEEYAFCaA1iBTGDMVWgDcAF4AYAB8gSIAeAhkgEJMi01LjUuMi4xmAEAoAEByAEHwAEB&sclient=gws-wiz-serp#lrd=0x8faca7cbe870317b:0xd9b358867bc19d5,1,,,,"
                                        target="_blank"
                                        className="d-flex flex-row-reverse align-items-center"
                                        style={{
                                            color: "rgba(25, 135, 84, 1)",
                                            fontSize: 14,
                                        }}
                                    >
                                        {" "}
                                        <div className="d-flex gap-1 align-items-center">
                                            <BsShieldFillCheck /> Ir a las
                                            reseñas
                                            <BsBoxArrowUpRight className="ms-1" />
                                        </div>{" "}
                                    </Link>
                                </Row>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <Card style={{ width: cardswight }}>
                            <Card.Body style={{ fontSize: 16 }}>
                                <div className="d-flex justify-content-between ">
                                    <div
                                        style={{ color: "gray" }}
                                        className="d-flex align-items-center "
                                    >
                                        <FcGoogle size={18} className="mr-1" />{" "}
                                        <p className="d-flex mx-1 align-items-center m-0">
                                            Google Reviews
                                        </p>
                                    </div>
                                    <Card.Text>Hace un mes</Card.Text>
                                </div>
                                <Row>
                                    <div style={{ width: "auto" }}>
                                        {" "}
                                        <Image
                                            alt=""
                                            src="/person.png "
                                            style={{ width: "50px" }}
                                        />
                                    </div>
                                    <Col>
                                        <div
                                            style={{
                                                color: "rgba(255, 193, 7, 1)",
                                            }}
                                        >
                                            <BsStarFill /> <BsStarFill />{" "}
                                            <BsStarFill /> <BsStarFill />
                                        </div>
                                        <Card.Title style={{ fontSize: 16 }}>
                                            {'"'}El servicio es muy rápido y
                                            profesional. A través de ReCycling
                                            PTY, conseguí vender mi bicicleta a
                                            lo que quería en tan sólo días.
                                            Recomiendo sus servicios{'"'}
                                        </Card.Title>
                                        <Card.Text style={{ color: "gray" }}>
                                            Pedro Rachadell
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    {" "}
                                    <Link
                                        //Link original de todas las reviews + _blank
                                        href="https://www.google.com/search?q=recycling+pty+reviews&sxsrf=AJOqlzXcDs1l6ISn8olyOBEe-UO3XdTSlA%3A1676638734699&ei=DnrvY-KpKuSo1sQPw5a7wAY&oq=recycling+PTY+re&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgQIIxAnMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDIGCAAQFhAeMgYIABAWEB4yCQgAEBYQHhDxBDIJCAAQFhAeEPEEMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDoKCAAQRxDWBBCwAzoKCAAQ8QQQHhCiBDoFCAAQogQ6CAgAEIAEEMsBOgYIIxAnEBM6CwgAEIAEELEDEIMBOgUIABCABEoECEEYAFCaA1iBTGDMVWgDcAF4AYAB8gSIAeAhkgEJMi01LjUuMi4xmAEAoAEByAEHwAEB&sclient=gws-wiz-serp#lrd=0x8faca7cbe870317b:0xd9b358867bc19d5,1,,,,"
                                        target="_blank"
                                        className="d-flex flex-row-reverse align-items-center"
                                        style={{
                                            color: "rgba(25, 135, 84, 1)",
                                            fontSize: 14,
                                        }}
                                    >
                                        {" "}
                                        <div className="d-flex gap-1 align-items-center">
                                            <BsShieldFillCheck /> Ir a las
                                            reseñas
                                            <BsBoxArrowUpRight className="ms-1" />
                                        </div>{" "}
                                    </Link>
                                </Row>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Container>
    );
}

export default Reviews;

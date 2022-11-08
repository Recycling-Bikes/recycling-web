import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FcGoogle } from "react-icons/fc";
import { BsStarFill, BsShieldFillCheck, BsBoxArrowUpRig } from "react-icons/bs";

import { Autoplay, Pagination } from 'swiper'


// Import Swiper styles
import 'swiper/css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link';

function Reviews(props) {

    let cardswight = "auto"


    return (
        <Container className='px-2 py-5 mt-5'>
            <Container >


                <div className='d-flex mb-4 justify-content-between'>
                    <h2 className='tittle-custom'>Conoce lo que miles de ciclistas dicen de nosotros</h2>

                    <div></div>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}




                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20

                        },
                        480: {
                            slidesPerView: 1.05,
                            spaceBetween: 30
                        },
                        576: {
                            slidesPerView: 1.15,
                            spaceBetween: 40
                        },

                        768: {
                            slidesPerView: 1.50,
                            spaceBetween: 40
                        },

                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1200: {
                            slidesPerView: 2.50,
                            spaceBetween: 40
                        },
                        1400: {
                            slidesPerView: 2.75,
                            spaceBetween: 40
                        }

                    }}

                    slidesPerView="auto"
                >

                    <SwiperSlide >    <Card style={{ width: cardswight }}>

                        <Card.Body style={{ fontSize: 16 }}>
                            <div className='d-flex justify-content-between '>
                                <p style={{ color: "gray" }} className='d-flex align-items-center '>
                                    <FcGoogle size={18} className="mr-1" /> Google Reviews</p>
                                <Card.Text>
                                    Hace un mes
                                </Card.Text>
                            </div>
                            <Row><div style={{ width: "auto" }}>  <img src='/person.png ' style={{ width: "50px" }} /></div>
                                <Col>
                                    <div style={{ color: "rgba(255, 193, 7, 1)" }}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
                                    <Card.Title style={{ fontSize: 16 }}>{'"'}Excelente servicio, muy buena asesoría y venta rápida y lo más importante todo claro y sin tramuñas.  Sigan de esta forma y llegarán lejos.{'"'}</Card.Title>
                                    <Card.Text style={{ color: "gray" }}>
                                        Reinaldo Calojero
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row> <Link href="./" className='d-flex flex-row-reverse align-items-center' style={{ color: "rgba(25, 135, 84, 1)", fontSize: 14 }}> <div><BsShieldFillCheck /> Ir a la reseña
                            </div>  </Link></Row>

                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide >    <Card style={{ width: cardswight }}>

                        <Card.Body style={{ fontSize: 16 }}>
                            <div className='d-flex justify-content-between '>
                                <p style={{ color: "gray" }} className='d-flex align-items-center '>
                                    <FcGoogle size={18} className="mr-1" /> Google Reviews</p>
                                <Card.Text>
                                    Hace un mes
                                </Card.Text>
                            </div>
                            <Row><div style={{ width: "auto" }}>  <img src='/person.png ' style={{ width: "50px" }} /></div>
                                <Col>
                                    <div style={{ color: "rgba(255, 193, 7, 1)" }}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
                                    <Card.Title style={{ fontSize: 16 }}>{'"'}Excelente servicio, muy buena asesoría y venta rápida y lo más importante todo claro y sin tramuñas.  Sigan de esta forma y llegarán lejos.{'"'}</Card.Title>
                                    <Card.Text style={{ color: "gray" }}>
                                        Reinaldo Calojero
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row> <Link href="./" className='d-flex flex-row-reverse align-items-center' style={{ color: "rgba(25, 135, 84, 1)", fontSize: 14 }}> <div><BsShieldFillCheck /> Ir a la reseña
                            </div>  </Link></Row>

                        </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide >    <Card style={{ width: cardswight }}>

                        <Card.Body style={{ fontSize: 16 }}>
                            <div className='d-flex justify-content-between '>
                                <p style={{ color: "gray" }} className='d-flex align-items-center '>
                                    <FcGoogle size={18} className="mr-1" /> Google Reviews</p>
                                <Card.Text>
                                    Hace un mes
                                </Card.Text>
                            </div>
                            <Row><div style={{ width: "auto" }}>  <img src='/person.png ' style={{ width: "50px" }} /></div>
                                <Col>
                                    <div style={{ color: "rgba(255, 193, 7, 1)" }}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
                                    <Card.Title style={{ fontSize: 16 }}>{'"'}Excelente servicio, muy buena asesoría y venta rápida y lo más importante todo claro y sin tramuñas.  Sigan de esta forma y llegarán lejos.{'"'}</Card.Title>
                                    <Card.Text style={{ color: "gray" }}>
                                        Reinaldo Calojero
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row> <Link href="./" className='d-flex flex-row-reverse align-items-center' style={{ color: "rgba(25, 135, 84, 1)", fontSize: 14 }}> <div><BsShieldFillCheck /> Ir a la reseña
                            </div>  </Link></Row>

                        </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide >    <Card style={{ width: cardswight }}>

                        <Card.Body style={{ fontSize: 16 }}>
                            <div className='d-flex justify-content-between '>
                                <p style={{ color: "gray" }} className='d-flex align-items-center '>
                                    <FcGoogle size={18} className="mr-1" /> Google Reviews</p>
                                <Card.Text>
                                    Hace un mes
                                </Card.Text>
                            </div>
                            <Row><div style={{ width: "auto" }}>  <img src='/person.png ' style={{ width: "50px" }} /></div>
                                <Col>
                                    <div style={{ color: "rgba(255, 193, 7, 1)" }}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
                                    <Card.Title style={{ fontSize: 16 }}>{'"'}Excelente servicio, muy buena asesoría y venta rápida y lo más importante todo claro y sin tramuñas.  Sigan de esta forma y llegarán lejos.{'"'}</Card.Title>
                                    <Card.Text style={{ color: "gray" }}>
                                        Reinaldo Calojero
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row> <Link href="./" className='d-flex flex-row-reverse align-items-center' style={{ color: "rgba(25, 135, 84, 1)", fontSize: 14 }}> <div><BsShieldFillCheck /> Ir a la reseña
                            </div>  </Link></Row>

                        </Card.Body>
                    </Card></SwiperSlide>



                </Swiper>
            </Container>
        </Container>


    );
}

export default Reviews;

//@ts-check
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper'


// Import Swiper styles
import 'swiper/css';
import { Container, Card, Badge } from 'react-bootstrap';
import React from 'react';

function Article(props) {
    const swiper = useSwiper();


    return (
        <Container className='px-2'>


            <div className='d-flex mb-4 justify-content-between'>
                <h2>Explora bicis destacadas</h2>

                <div></div>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}


                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                      },
                      360: {
                        slidesPerView: 1.25,
                        spaceBetween: 20
                      },
                      480: {
                        slidesPerView: 1.40,
                        spaceBetween: 30
                      },
                    576: {
                        slidesPerView: 1.60,
                        spaceBetween: 40
                      },

                      768: {
                        slidesPerView: 2.50,
                        spaceBetween: 40
                      },
                      
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 40
                      },
                      1200: {
                        slidesPerView: 3.75,
                        spaceBetween: 40
                      },
                      1400: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      }

                }}

                slidesPerView="auto"
            >
                <Container className='mx-5'>
                <SwiperSlide >    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · COLOMBIA
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $6,499
                        </Card.Text>


                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Gran oferta</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="none" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                </Container>

            </Swiper>
        </Container>


    );
}

export default Article;
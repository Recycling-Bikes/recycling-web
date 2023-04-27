import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Container, Card, Badge, Button, Placeholder } from "react-bootstrap";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs/";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "supabase/client";
import { CDN } from "utils/constantes";
import { useRouter } from "next/router";

const getBicis = async () => {
  const { data: bicis, error } = await supabase
    .from("bicis")
    .select(
      `
  id,price,title, etiquetas (name),
  models (name), filesUrl`
    )
    .eq("main", true);

  console.log(bicis);

  return error ? error : bicis;
};

function Article({ Title }) {

  const router = useRouter();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["productos"],
    queryFn: () => getBicis(),
  });


  const [change, setChange] = useState(null);

  const styleButtons = {
    background: "#CFEEEB",
    borderRadius: "40px",
    borderColor: "#CFEEEB",
    color: "black !important",
    height: "32px",
    width: "32px",
  };

  return (
    <Container className="px-2 py-5">
      <Container>
        <div className="d-flex mb-4 justify-content-between">
          <h2 className="tittle-custom">{Title}</h2>
          {/*Start Arrows */}

          <div className="d-flex justify-content-center align-items-center">
            <Button
              className="me-2 d-grid justify-content-center align-content-center"
              variant="light"
              onClick={() => change?.slidePrev()}
              style={styleButtons}
            >
              <BsChevronLeft size={16} />
            </Button>
            <Button
              className="ms-1 d-grid justify-content-center align-content-center"
              variant="light"
              onClick={() => change?.slideNext()}
              style={styleButtons}
            >
              <BsChevronRight size={16} />
            </Button>
          </div>
          {/*End Arrows */}
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            setChange(swiper);
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            360: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.4,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 1.6,
              spaceBetween: 40,
            },

            768: {
              slidesPerView: 2.25,
              spaceBetween: 40,
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3.75,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          slidesPerView="auto"
        >
          {isLoading && (
            <SwiperSlide>
              {" "}
              <Card style={{ width: "18rem", height: "370px" }} >
                <div className="m-3">
                  <Placeholder bg="primary" size="xs" xs={4} />
                </div>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={5} />
                  </Placeholder>
                </Card.Body>
              </Card>
            </SwiperSlide>
          )}
          {isError && <div>Error</div>}
          {data?.map((bici) => (
            <SwiperSlide key={bici.id}>
              {" "}
              <Card style={{ width: "18rem", height: "370px" }} onClick={()=>{router.push(`/parking/${bici.id}`)}}>
                <div className="m-3">
                  <Badge
                    className="mb-1"
                    bg={bici?.etiquetas?.name ? "primary" : ""}
                  >
                    {bici?.etiquetas?.name}{" "}
                  </Badge>
                  <Card.Img
                    variant="top"
                    src={CDN + bici?.filesUrl[0]}
                    style={{
                      maxHeight: "200px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {bici?.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "rgba(108, 117, 125, 1)",
                    }}
                  >
                    ${bici?.price.toLocaleString("en")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
}

export default Article;

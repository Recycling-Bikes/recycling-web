import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container, Card, Button, Placeholder } from "react-bootstrap";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs/";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "supabase/client";
import { useRouter } from "next/router";
import { ComponenteBike } from "components/bicletas";

const getBicis = async () => {
  const { data: bicis, error } = await supabase
    .from("bicis")
    .select(
      `
  id,price,title, etiquetas (name),
  models (name), filesUrl,
  verified,
  off`
    )
    .eq("main", true);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return bicis ?? [];
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
          {(isLoading || isError || !data) && (
            <SwiperSlide>
              {" "}
              <Card style={{ width: "18rem", height: "370px" }}>
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
          {/* {isError && <div>Error</div>} */}
          {!isLoading && !isError && data && data?.map((bici) => (
            <SwiperSlide key={bici.id}>
              {" "}
              <ComponenteBike
                key={bici.id}
                id={bici.id}
                name={bici.models.name}
                title={bici.title}
                price={bici.price}
                off={bici.off}
                image={bici.filesUrl[0]}
                etiqueta={bici.etiquetas?.name}
                verified={bici.verified}
                style={{ width: "18rem", height: "370px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
}

export default Article;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Breadcrumb, Row, Col, Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

import Image from "next/image";
import { parkingState } from "context/Parking/ParkingState";

export default function Vista() {
  const [bici, CDN] = parkingState((state) => [state.bici, state.CDN]);

  useEffect(() => {
    /* console.log(1) */
  });

  const [primaryVista, setPrimaryVista] = useState(
    bici.filesUrl.length === 0 ? [] : bici.filesUrl[0]
  );

  return (
    <>
      <Row className="mt-4">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/parking">Parking</Breadcrumb.Item>
          <Breadcrumb.Item active>SKU: {bici.id}</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col md="2" className="d-none d-lg-block">
          {bici.filesUrl.map((link) => (
            <Image
              src={CDN + link}
              alt=""
              key={link}
              width={50}
              height={50}
              className="m-2 cover"
              onClick={() => setPrimaryVista(link)}
            />
          ))}
        </Col>
        <Col className="d-none d-lg-block">
          <Container>
            <img src={CDN + primaryVista} className="img-fluid p-0" />
          </Container>
        </Col>

        <Col className="d-lg-none">
          <Carousel>
            {bici.filesUrl.map((link) => (
              <Carousel.Item key={link}>
                <img
                  src={CDN + link}
                  className="d-block w-100"
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

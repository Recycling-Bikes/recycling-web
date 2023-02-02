import { avaluadorState } from "context/Avaluador/avaluadorState";
import { Card, Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { use, useEffect, useRef, useState } from "react";

export  function ListBicis({
  data,
  quest,
  brand,
  image,
  setModalShow,
  setCardSelected
}) {
  return data.flatMap((datum) => {
        let { name, price, year, id, brands } = datum;

        if (
          (quest.years.length === 0 || quest.years?.includes(year)) &&
          (name.toLowerCase().includes(brand.toLowerCase()) ||
            brands.name.toLowerCase().includes(brand.toLowerCase()))
        ) {
          return (
            <div key={id}>
              <Card
                style={{ width: "auto", maxWidth: "514px" }}
                onClick={() => {
                  setModalShow(true);
                  setCardSelected(datum);
                }}
              >
                <div className="m-3">
                  <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                  <Card.Title>
                    {brands.name}, {name}, {year}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        }

        return [];
      }
  );
}


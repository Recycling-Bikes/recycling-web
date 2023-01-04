import React from "react";
import { Row } from "react-bootstrap";
import Bicis from "./bicis";

export default function Getbicis() {
  const width = "16.8rem";
  const clase = "m-2 p-0";

  const widthMini = "auto";
  const claseMini = "mx-5 my-2";

  return (
    <>
      <Row className="my-4 d-none d-md-flex">
        <Bicis width={width} clase={clase} />
      </Row>
      <Row className="my-4 justify-content-center d-md-none mx-3">
        <Bicis width={widthMini} clase={claseMini} />
      </Row>
    </>
  );
}

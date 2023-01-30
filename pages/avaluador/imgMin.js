import Image from "next/image";
import React from "react";
import ImagePrincipal from "./min_VfUN94cUy4o.png";

export default function ImageAvaluadorMin({style, ...props}) {
  return (
    
    <Image
      src={ImagePrincipal}
      alt=""
      className="ratio ratio-16x9 p-0 img-fluid"
      style={{ maxHeight: "800px",
      maxWidth: "800px",
      ...style
     }}
    />
  );
}


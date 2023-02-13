import Image from "next/image";
import React from "react";
import ImagePrincipal from "./unsplash_VfUN94cUy4o.png";

export default function ImagePrueba() {
    return (
        <Image
            src={ImagePrincipal}
            alt=""
            className="ratio ratio-1x1 d-none d-xl-block"
            style={{ maxHeight: "800px", maxWidth: "800px" }}
        />
    );
}

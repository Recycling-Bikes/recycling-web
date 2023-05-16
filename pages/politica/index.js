import Main from "components/main";
import { listPolitical } from "components/politica/rutas";
import Link from "next/link";
import React from "react";

export default function Politic() {
  return (
    <Main>
      <span>
        <div
          className="d-grid my-5 "
          style={{
            placeContent: "center",
            marginTop: "14rem !important;",
            marginBottom: "14rem !important;",
          }}
        >
          <h1>Políticas</h1>
          <ul>
            {listPolitical.map((item, index) => (
              <Link key={index} href={"/politica" + item.link}>
                <li>
                  <h4>{item.name}</h4>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </span>
    </Main>
  );
}

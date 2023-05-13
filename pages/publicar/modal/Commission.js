import Link from "next/link";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userState } from "context/User/UserState";
import { useRouter } from "next/router";

export default function PopCommission(props) {
  return (
    <Modal
      centered
      show={props.ModalShow}
      onHide={() => props.setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Calcula el costo de comisión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          Publicar tu bicicleta es gratis; sin embargo, si tu bicicleta es
          vendida, se generará una comisión para el sostenimiento de la
          plataforma. Esta comisión dependerá del precio de venta de tu
          bicicleta, de acuerdo con la siguiente información:
        </span>
        <div>
          <br />
          <ul>
            <li>$0 - $500: 15%</li>
            <li>$501 - $800: 14%</li>
            <li>$801 - $1000: 13%</li>
            <li>$1001 - $1250: 12%</li>
            <li>$1251 - $1500: 11%</li>
            <li>$1501 - $2000: 10%</li>
            <li>$2001 - $2750: 9%</li>
            <li>$2751 - $3500: 8%</li>
            <li>$3501 - $4000: 7%</li>
            <li>$4001 +: 5%</li>
          </ul>
        </div>
        <span>
          Por ejemplo: si deseas que el precio final de tu bicicleta sea de
          $1,700, al venderla, deberás pagar una comisión del 10% ($170), por lo
          que recibirás $1,530.
        </span>
      </Modal.Body>   
      <Modal.Footer>
        <Button variant="primary" onClick={() => props.setModalShow(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

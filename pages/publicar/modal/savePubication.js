import { useRouter } from "next/router";
import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function PopPublicationSave(props) {
  const router = useRouter();
  return (
    <Modal
      centered
      show={props.ModalShow}
      onHide={() => (props.setModalShow(false), router.push("/"))}
    >
      <Modal.Header closeButton>
        <Modal.Title>¡Publicación guardada exitosamente!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          Tu publicación ha sido guardada exitosamente. Próximamente será
          revisada y publicada en el marketplace.
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => (props.setModalShow(false), router.push("/"))}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import {Button, Modal, Form } from "react-bootstrap";

export default function ModalShow({image, title, selectOne, selectTitle, priceDescount, price, pass, legal, tags, handleTitle, handleContentPass, handleContentTags, handleLegal, handlePublish, handleClose, publishing, show, handleSelectOption}) {

  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img
        src={image}
        alt={title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Form> <br/>
      <Form.Select aria-label="Default select example" value={selectOne} onChange={handleSelectOption} >
        <option>Que tipo de publicacion es ?</option>
        <option value="1" >Descuento</option>
        <option value="2" >Bici usada</option>
      </Form.Select>
      {
        selectOne == 1 ? (
          <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>

            <Form.Control type="text" placeholder={selectTitle} value={selectTitle} onChange={ handleTitle}   />

            <Form.Label>precio antes</Form.Label>
            <Form.Control type="text" placeholder={price} disabled aria-label="Disabled input example" />

            <Form.Label>precio ahora</Form.Label>
            <Form.Control type="text" placeholder={priceDescount} />

            <Form.Label>formas de pago</Form.Label>
            <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

            <Form.Label>Legalidades y avisos</Form.Label>
            <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

            <Form.Label>etiquetas</Form.Label>
            <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />

          </Form.Group>
        ) : selectOne == 2 && (
          <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>
            <Form.Control type="text" value={selectTitle} onChange={handleTitle}   />

            <Form.Label>precio</Form.Label>
            <Form.Control type="text" placeholder={price} disabled aria-label="Disabled input example" />


            <Form.Label>formas de pago</Form.Label>
            <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

            <Form.Label>Legalidades y avisos</Form.Label>
            <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

            <Form.Label>etiquetas</Form.Label>
            <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />
          </Form.Group>
        )
      }
      

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="primary"
        onClick={handlePublish}
        disabled={publishing}
      >
        {publishing ? "Publicando..." : "Publicar en Instagram"}
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
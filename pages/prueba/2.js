import React from "react";
import ImageUploading from "react-images-uploading";
import { Button, Col, Container, Row } from "react-bootstrap";
import Contenedor from "components/home/Contenedor";

export default function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    console.log(addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Contenedor>
    <Container>
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className="mb-3">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll}>Remove all images</Button>
            </div>

            <Row>
            {imageList.map((image, index) => (
              <Col lg={4} xs={6} key={index} className="image-item d-flex align-items-end mb-3">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button className="m-1" onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button className="m-1"  onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </Col>
            ))}
            </Row>
          </div>
        )}
      </ImageUploading>
    </div>
    </Container>
    </Contenedor>
  );
}

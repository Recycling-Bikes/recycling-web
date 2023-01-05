import React from "react";
import ImageUploading from "react-images-uploading";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Contenedor from "components/home/Contenedor";
import { HiPlus } from "react-icons/hi";

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
        <div className="">
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
              <div className="mt-5">
                <div className="d-flex align-items-end justify-content-end">
                  <Button className="mb-2" onClick={onImageRemoveAll}>
                    Quitar todas las imágenes
                  </Button>
                </div>

                <div
                  className="upload__image-wrapper "
                  style={{
                    backgroundColor: "#F8F9FA",
                    border: "1px dashed #ADB5BD",
                    borderRadius: "10px",
                  }}
                >

                  <Row style={{ minHeight: "150px" }} className="mb-4" >
                    {imageList.length > 0 ? (
                      <Row className="mx-4">
                        <Col
                          lg={4}
                          xs={6}
                          className="image-item d-flex align-items-center   mt-4 flex-column justify-content-center"
                          onClick={onImageUpload}
                          {...dragProps}
                          style={{height: "200px",
                            width: "200px",}}
                        ><div
                        className="image-item d-flex align-items-center  my-4  flex-column justify-content-center"
                        style={{border: "1px dashed #ADB5BD",
                            borderRadius: "10px",
                            height: "160px",
                            width: "160px",
                        }}>
                            <HiPlus />
                            <center>Subir o arrastrar fotos</center>
                            </div>
                          
                        </Col>

                        {imageList.map((image, index) => (
                          <Col
                            lg={4}
                            xs={6}
                            key={index}
                            className=" d-flex align-items-center mt-3 flex-column justify-content-end"
                            style={{height: "200px",
                            width: "200px",}}
                          >
                            <Image src={image["data_url"]} alt="" width="100" height="100"
                            onClick={() => onImageRemove(index)}
                            />
                            <div className="image-item__btn-wrapper">
                              <Button
                                className="m-1"
                                onClick={() => onImageUpdate(index)}
                              >
                                Actualizar
                              </Button>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Col
                        className="d-flex flex-column justify-content-center align-items-center"
                        style={{
                          height: "150px",
                          width: "100%",
                          padding: "auto",
                          color: isDragging ? "red" : "",
                        }}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <HiPlus />
                        Subir o arrastrar fotos
                      </Col>
                    )}
                  </Row>
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </Container>
    </Contenedor>
  );
}

// import Link from "next/link";
// import { Badge, Card, Button, Modal, Form } from "react-bootstrap";
// import { CDN } from "utils/constantes";
// import propTypes from "prop-types";
// import { BsShieldFillCheck } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import {
//   uploadImage,
//   publishPostInstagram,
// } from "services/PublishPostInstagram";
// import toast, { Toaster } from "react-hot-toast";

// ComponenteBikeIg.propTypes = {
//   id: propTypes.any.isRequired,
//   name: propTypes.string.isRequired,
//   title: propTypes.string.isRequired,
//   price: propTypes.number.isRequired,
//   off: propTypes.number,
//   image: propTypes.string.isRequired,
//   etiqueta: propTypes.string,
//   verified: propTypes.bool,
// };

// export function ComponenteBikeIg({
//   id,
//   name,
//   title,
//   price,
//   off,
//   image,
//   etiqueta = null,
//   verified = false,
//   sold = false,
//   ...props
// }) {
//   const [publisher, setPublisher] = useState(false);
//   const viewPublisher = "Se ha publicado correctamente";
//   const [seEjecuto, setSeEjecuto] = useState(false);
//   const [tags, setTags] = useState(
//     "#bici #bicicleta #bike #bicycle #ciclismo #ciclista #cycling #mtb #bicicletas #bikes #ciclistas #bikelife #ciclismodecarretera #ciclismomtb #ciclis",
//   );
//   const [pass, setPass] = useState(`Forma de pago: 
//   * De contado.
//   * Abonos: Reserva con el 30%, 4 meses de plazo para terminarla de pagar.
//   Envios a todo el pais:
//   * Gratis en ciudad de Panamá.
//   * $20.90 a cualquier otra provincia
//   `);

//   const [legal, setLegal] = useState(`Cabe recordar que Recycling Inc es una empresa intermediaria para la venta de productos de ciclismo. Una vez que se completa la venta, solo entregamos el dinero al propietario anterior después de recibir el producto satisfactoriamente  en nuestro showroom, por lo que garantizamos la seguridad para su comprador.
//   Si deseas realizar la compra de este producto puedes contactarnos al +507 69240795.
//   ♻🚲♻🚲♻🚲♻🚲♻🚲♻
  
  
  
  
//   `)
//   const [selectTitle, setSelectTitle] = useState('');



  
//   const [selectOne, setSelectOne] = useState('');

//   const handleSelectOption = (event) => {
//     const options = event.target.value;
//     setSelectOne(options);
//     handleTitle();
//   }
//   const handleContentPass = (e) => {
//     e.preventDefault()
//     setPass(e.target.value);
//   }

//   const handleContentTags = (e) => {
//     e.preventDefault()
//     setTags(e.target.value);
//   }
//   const handleLegal = (e) => {
//     e.preventDefault()
//     setLegal(e.target.value);
//   }

//   const handleTitle = () => {
//     const options = selectOne;

//     // titulos 
//     const titleOpcions = {
//       opcion1: `🟣🟣🟣🟣 DESCUENTO 🟣🟣🟣🟣`,
//       opcion2: `🟣🟣🟣🟣 BICI USADA 🟣🟣🟣🟣`,
//     }

//     // validad que opcion es
//     if (options == 1) {
//       setSelectTitle(titleOpcions.opcion1)
//     } else if(options == 2) {
//       setSelectTitle(titleOpcions.opcion2)
//     } 
    

//   }
//   useEffect(() => {
//     handleTitle();
//   }, [selectOne])

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => {
//     setShow(true);
//   };

//   const [publishing, setPublishing] = useState(false);
  
//   function Descuento(original, off) {
//     const descuento = original - off;
//     const porcentaje = ((descuento / original) * 100).toFixed(0);

//     if (porcentaje == 100) {
//       return 99;
//     }

//     return porcentaje;
//   }

//   if (sold) {
//     console.log(sold);
//   }

//   const mostrarTexto = () => {
//     if (!seEjecuto) {
//       setSeEjecuto(true);
//       setPublisher(true);
//       console.log(JSON.stringify(title));
//       console.log(
//         JSON.stringify(
//           `${CDN}${image}?width=500&height=180&quality=60&webp=true&format=webp&fit=cover&optimize=medium`,
//         ),
//       );
//     }
//   };

//   const ig_user_id = process.env.NEXT_PUBLIC_INSTAGRAM_IG_USER_ID;
//   const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
//   const image_url = `${CDN}${image}`;
//   const caption = `${selectTitle}

//    ${title}


//    ${price} 

//    ${pass} 

//    ${legal} 

//    ${tags}  `;

//   // funcionalidad para publicar en Instagram
//   async function publicar() {
//     const result = await uploadImage(
//       image_url,
//       access_token,
//       ig_user_id,
//       caption,
//     );
//     await publishPostInstagram(result, access_token, ig_user_id);
//   }

//   const handlePublish = async () => {
//     setPublishing(true);
//     try {
//       await publicar();
//       handleClose(); // cerrar el modal despues de publicar
//     } catch (error) {
//       toast.error("Error al publicar", error);
//       console.log(error)
//     } finally {
//       setPublishing(false);
//     }
//   };


//   return (
//     <>
//       <Card className="p-0" {...props}>
//         {/* <Link href={`/parking/${id}`} passHref> */}
//         <div className="m-3 position-relative">
//           <Badge className="mb-1" bg={etiqueta ? "primary" : ""}>
//             {etiqueta}
//           </Badge>

//           <Card.Img
//             variant="top"
//             src={`${CDN}${image}?width=500&height=180&quality=60&webp=true&format=webp&fit=cover&optimize=medium`}
//             style={{
//               maxHeight: "180px",
//               minHeight: "180px",
//               borderRadius: "5px",
//               objectFit: "cover",
//               width: "100%",
//             }}
//           />
//           {/*  sello de verificado */}
//           {verified && !sold && (
//             <div
//               className="px-2"
//               style={{
//                 position: "absolute",
//                 bottom: -4,
//                 left: 10,
//                 backgroundColor: "#0fa899",
//                 color: "white",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <BsShieldFillCheck />
//               <span className="ms-2">Verificado</span>
//             </div>
//           )}
//           {sold && (
//             <div
//               className="px-2"
//               style={{
//                 position: "absolute",
//                 bottom: -4,
//                 left: 10,
//                 backgroundColor: "red",
//                 color: "white",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <span className="ms-2">Vendido</span>
//             </div>
//           )}
//         </div>
//         <Card.Body className="pt-0">
//           <Card.Text
//             style={{
//               color: "rgba(108, 117, 125, 1)",
//             }}
//           >
//             {name}
//           </Card.Text>
//           <Card.Title style={{ color: "black" }}>{title}</Card.Title>
//           <Card.Text
//             style={{
//               color: "rgba(108, 117, 125, 1)",
//             }}
//           >
//             ${off ?? price}
//             {off ? (
//               <span className=" mx-1">
//                 <span
//                   className="me-2"
//                   style={{
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   {price?.toLocaleString("en")}
//                 </span>
//                 <span
//                   style={{
//                     color: "#0fa899",
//                   }}
//                 >
//                   {Descuento(price, off)}% off
//                 </span>
//                 <span>{}</span>
//               </span>
//             ) : (
//               ""
//             )}
//             {/* Ig Button */}
//             <span className="text-start d-block ">
//               <button
//                 className=" btn btn-primary my-2 d-block "
//                 onClick={handleShow}
//               >
//                 Publicar en Ig
//               </button>
//               {publisher && (
//                 <span className=" my-2 d-block">{viewPublisher}</span>
//               )}
//             </span>
//             <span className=" h5 text-start ">
//               <Link href={`/parking/${id}`} passHref>
//                 ver bici
//               </Link>
//             </span>
//           </Card.Text>
//         </Card.Body>
//         {/* </Link> */}
//         <Toaster position="bottom-left" reverseOrder={false} />
//       </Card>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img
//             src={`${CDN}${image}`}
//             alt={title}
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//           <p>{`Precio: $${off ?? price}`}</p>
//           {off && <p>{`Descuento: ${Descuento(price, off)}%`}</p>}
//           <Form>
//           <Form.Select aria-label="Default select example" value={selectOne} onChange={handleSelectOption} >
//             <option>Que tipo de publicacion es ?</option>
//             <option value="1" >Descuento</option>
//             <option value="2" >Bici usada</option>
//           </Form.Select>
//           {
//             selectOne == 1 ? (
//               <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>

//                 <Form.Control type="text" placeholder={selectTitle} value={selectTitle} onChange={ handleTitle}   />

//                 <Form.Label>precio antes</Form.Label>
//                 <Form.Control type="text" placeholder={price} disabled aria-label="Disabled input example" />

//                 <Form.Label>precio ahora</Form.Label>
//                 <Form.Control type="text" placeholder={off} />

//                 <Form.Label>formas de pago</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

//                 <Form.Label>Legalidades y avisos</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

//                 <Form.Label>etiquetas</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />

//               </Form.Group>
//             ) : selectOne == 2 && (
//               <Form.Group className="mb-3" controlId="formBasicEmail"> <br/>
//                 <Form.Control type="text" placeholder={off} value={selectTitle} onChange={handleTitle}   />

//                 <Form.Label>precio</Form.Label>
//                 <Form.Control type="text" placeholder={price} disabled aria-label="Disabled input example" />


//                 <Form.Label>formas de pago</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={pass} onChange={handleContentPass} />

//                 <Form.Label>Legalidades y avisos</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={legal} onChange={handleLegal} />

//                 <Form.Label>etiquetas</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={tags} onChange={handleContentTags} />
//               </Form.Group>
//             )
//           }
          

//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={handlePublish}
//             disabled={publishing}
//           >
//             {publishing ? "Publicando..." : "Publicar en Instagram"}
//           </Button>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

/** template post */

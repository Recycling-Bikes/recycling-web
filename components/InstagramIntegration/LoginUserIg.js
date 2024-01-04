// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import imgBici from "../../public/mesa.png";
// import toast, { Toaster } from "react-hot-toast";
// import Head from "next/head";
// import Link from "next/link";
// import { userState } from "context/User/UserState";


// const LoginUserIg = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const signIn = userState((state) => state.signIn);
//   const [user, setUser] = useState(null);
  

//   // funcionalidad para logearse y valida d si el rol es de super-admin entonces procede a logearse


//     // const handleLogin = async () => {
//     //   if(role === 'super-admin'){
//     //     console.log('soy super-admin', role)
//     //     await onLogin(user)
//     //     } else {
//     //       setError(error);
//     //       toast.error('no tienes permisos para acceder a esta pagina');
//     //       setLoading(false);
//     //     }
//     // }
//     // if(user){
//     //   checkRoleAdmin()
//     // }

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   const { user, error } = await signIn({ email, password });
//   //   if (error) {
//   //     setError(error?.message);
//   //     toast.error(error?.message);
//   //     setLoading(false);
//   //   } else {
//   //     setUser(user);
//   //   }
    
//   // }




//   return (
//     <>
//       <Head>
//         <link rel="shortcut icon" href="/mesa.png" />
//         <title>Login</title>
//       </Head>


//       <Container
//         className="m-3 p-4 py-5"
//         style={{
//           maxWidth: "400px",
//           border: "2px solid #0fa899",
//           position: "relative",
//         }}
//       >
//         {/* Imagen en la parte superior del contenedor */}
//         <Image
//           src={imgBici}
//           alt="logo"
//           width={80}
//           height={80}
//           style={{
//             position: "absolute",
//             top: "0",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: "50%",
//             background: "#fff",
//             borderRadius: "50px",
//             border: "2px solid #0fa899",
//           }}
//         />

//         <h2 className="mb-4 text-center">Accede a Recycling</h2>
//         <Form onSubmit={handleLogin}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Login
//           </Button>
//           <Link href="/" passHref><Button variant="link">Volver a la pagina principal</Button></Link>
//         </Form>
//         {error && (
//           <p className="mt-3 text-danger text-center">
//             Credenciales incorrectas
//           </p>
//         )}
//         {loading && <Toaster position="top-center" reverseOrder={false} />}
//       </Container>
//     </>
//   );
// };

// export default LoginUserIg;

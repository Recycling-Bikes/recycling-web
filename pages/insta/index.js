import React, { useState, useEffect } from "react";
import InstaFilter from "../../components/InstagramIntegration/InstaFilter";
import LoginUserIg from "../../components/InstagramIntegration/LoginUserIg";
import Head from "next/head";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mesa.png" />
        <title>Instagram</title>
      </Head>

      <div>
        {!isLoggedIn ? (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <LoginUserIg onLogin={handleLogin} />
          </div>
        ) : (
          <div>
            <div
              className="container-fluid my-3 d-flex flex-column flex-md-row align-items-center justify-content-around "
              style={{ background: "#0fa899", padding: "10px" }}
            >
              <p className="text-center h3 text-light mb-3 mb-md-0">
                Dashboard Social | Publicar en Instagram
              </p>
              <button
                className="btn btn-outline-light rounded-pill border border-2 border-white "
                style={{
                  height: "36px",
                  minWidth: "120px",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
            <div className=" container">
              <InstaFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;

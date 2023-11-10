import React from "react";
import InstaFilter from "../../components/InstagramIntegration/InstaFilter";

const Index = () => {
  return (
    <>
      <div className=" container-fluid bg-primary my-5 ">
        <p className=" text-center h1 text-light ">
          Instagram Filter Preview
        </p>
      </div>

      <div className=" container ">
        <InstaFilter />
      </div>
    </>
  );
};

export default Index;

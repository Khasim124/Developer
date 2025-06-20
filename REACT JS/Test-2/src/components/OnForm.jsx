import React from "react";
import CarouselSection from "./CarouselSection";
import LoginForm from "./LoginForm";

const OnForm = () => {
  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="w-60 d-flex align-items-center justify-content-center bg-light"
        style={{ width: "60%" }}
      >
        <CarouselSection />
      </div>
      <div
        className="w-40 d-flex justify-content-center align-items-center"
        style={{ width: "40%" }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default OnForm;

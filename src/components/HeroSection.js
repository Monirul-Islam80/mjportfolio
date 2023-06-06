import React, { useEffect, useRef } from "react";
import image from "../images/me-e1cc23f413b201636eecefd46a8abdc8.jpg";
const HeroSection = ({ animateComponents }) => {
  const z = useRef();
  const i = useRef();
  useEffect(() => {
    animateComponents(z, "component3");
    animateComponents(i, "component2");
  }, [animateComponents]);

  return (
    <div className="herosec" id="home">
      <div className="herodetails" ref={z}>
        <div className="herointro">
          <h1>
            Hello, I'm MD.Majid, a product
            <br /> Electrician With 7 years of experience.
          </h1>
          <p>
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>

        <div className="clist">
          <button className="cbtn">Contact Me</button>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="bg">
          <div className="bg1"></div>
          <div className="bg2"></div>
        </div>
      </div>
      <div className="heroimage" ref={i}>
        <img src={image} alt="me" width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default HeroSection;

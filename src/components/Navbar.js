import React, { useEffect, useRef, useState } from "react";
import logo from "../images/download.svg";
const Navbar = ({ animateComponents }) => {
  const z = useRef();

  const x = useRef();
  const y = useRef();
  const [state, setstate] = useState(true);
  function myFunction() {
    if (state) {
      setstate(!state);
      x.current.classList.toggle("change");
      y.current.classList.toggle("navanimation");
      document.body.style.overflow = "hidden";
    } else {
      x.current.classList.toggle("change");
      y.current.classList.toggle("antinavanimation");
      document.body.style.overflow = "auto";
    }
  }
  useEffect(() => {
    animateComponents(z, "component");
  }, [animateComponents]);

  return (
    <div className="main_nav " ref={z}>
      <div>
        <img src={logo} alt="logo" width={"70px"} />
      </div>
      <div className="cont" ref={x} onClick={() => myFunction()}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="manu" ref={y}>
        <a onClick={() => myFunction()} href="#home">
          Home
        </a>
        <a onClick={() => myFunction()} href="#projects">
          Projects
        </a>
        <a onClick={() => myFunction()} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

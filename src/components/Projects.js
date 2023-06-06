import React, { useEffect, useRef } from "react";
import Card from "./Card";
import img1 from "../images/Baffy.webp";
import img2 from "../images/Crypto.webp";
import img3 from "../images/Flop.webp";
import img4 from "../images/Lendscape.webp";
import img5 from "../images/Promot3.webp";
import img6 from "../images/Tribe.webp";

const Projects = ({ animateComponents }) => {
  const z = useRef();
  useEffect(() => {
    animateComponents(z, "component4");
  }, [animateComponents]);

  return (
    <div className="projects" id="projects" ref={z}>
      <Card imgsrc={img1} />
      <Card imgsrc={img2} />
      <Card imgsrc={img3} />
      <Card imgsrc={img4} />
      <Card imgsrc={img5} />
      <Card imgsrc={img6} />
    </div>
  );
};

export default Projects;

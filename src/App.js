import { useEffect } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  function animateComponents(z, cln) {
    console.log(z, cln);
    z.current.classList.add(cln);
  }

  return (
    <>
      <Navbar animateComponents={animateComponents} />
      <HeroSection animateComponents={animateComponents} />
      <Projects animateComponents={animateComponents} />
      <Footer />
    </>
  );
}

export default App;

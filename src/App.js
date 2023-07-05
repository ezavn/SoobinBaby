import Benefit from "./components/Benefit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ginseng from "./components/Ginseng";
import Part from "./components/Part";
import Why from "./components/Why";
import Market from "./components/Market";
import Instruct from "./components/Instruct";
import Call from "./components/commons/Call";
import BackToTop from "./components/commons/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.querySelectorAll("img").forEach((img) =>
      img.addEventListener("load", () => {
        AOS.refresh();
      })
    );
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Benefit />
      <Ginseng />
      <Part />
      <Why />
      <Market />
      <Instruct />
      <Footer />
      <Call />
      <BackToTop />
    </div>
  );
}

export default App;

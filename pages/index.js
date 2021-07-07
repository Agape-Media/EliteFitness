import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Contact from "../components/Contact";
import Contact2 from "../components/Contact2";
import Layout from "../components/Layout";
import Video from "../components/Home/Video";
import Carousel from "../components/Home/Carousel";

export default function Home() {
  const [open, setNav] = useState(false);

  function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <Layout home>
      <Video />
      <Carousel />

      <Contact2 />
    </Layout>
  );
}

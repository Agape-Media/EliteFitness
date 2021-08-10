import React from "react";

import Contact from "../components/Home/Contact";
import Layout from "../components/Layout";
import Video from "../components/Home/Video";
import Carousel from "../components/Home/Carousel";

export default function Home() {
  return (
    <Layout home>
      <Video />
      <Carousel />

      <Contact />
    </Layout>
  );
}

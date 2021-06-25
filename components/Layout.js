import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Elite Fitness</title>
        <link rel="icon" href="/icon.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></script>
      </Head>
      <div className="max-w-6xl w-full h-screen flex flex-col lg:mx-auto">
        <Header />
        <div className="pt-4 sm:pt-12 flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}

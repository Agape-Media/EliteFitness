import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Contact from '../components/Contact'
export default function Home() {
  const [open, setNav] = useState(false);

  function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle('hidden')
    document.getElementById(collapseID).classList.toggle('block')
  }
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    })
  }, []);

  return (
    <div >
      <Head>
        <title>Elite Fitness</title>
        <link rel="icon" href="/icon.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></script>
      </Head>

      <Header />
    
    {/* <!-- Main Area --> */}
    <main>
      {/* <!-- Hero --> */}
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{minHeight: "95vh"}}
      >
        <div
          className="absolute top-0 w-full h-full bg-top bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  Welcome to <span className="text-red-700">Elite</span> Fitness
                </h1>
                <p className="mx-auto w-2/3 mt-4 text-lg text-gray-300">
                We are a fitness and training facility that focuses on helping you become the <span className="text-red-700 font-medium">best version of you.</span>
                  
                </p>
                {/* <a
                  href="#"
                  className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white p-4 border border-red-700 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                  >Download Brochure</a
                > */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{height: "70px", transform: "translateZ(0px)"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>

      {/* <!-- About Section --> */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap overflow-x-hidden">
            <div
              className="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              {/* <Image
              width={469}
              height={703}
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="/girlLifting.jpeg"
              /> */}
            </div>
            <div
              className="w-full md:w-5/12 ml-auto mr-auto px-4 "
              data-aos="fade-left"
            >
              <div className="md:pr-12 ">
                <small className="text-red-700">About our gym</small>
                <h3 className="text-4xl uppercase font-bold">Rise to new levels</h3>
                <p className="mt-4 text-lg leading-relaxed">
                Elite Fitness is a 24/7 workout facility offering commercial equipment, 
                warehouse-style lifting and cross-training to cater to different 
                workout styles and help you create a lasting change in your life.
                </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Trainers Section --> */}
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase">
                Our Facility
              </h2>
              <p className="text-lg leading-relaxed m-4">
                Our three workout sections designed to help get you in the best shape of your life.
              </p>
            </div>
          </div>
          {/* <!-- Trainer Card Wrapper --> */}
          <div className="flex flex-wrap">
            {/* <!-- Card 1 --> */}
            <div
              className="w-full md:w-4/12 lg:mb-0 mb-12 px-4 "
              data-aos="flip-right"
            >
              <div className="px-6">
                <img
                  alt="..."
                  src="/freeWeights.jpg"
                  className="shadow-lg rounded max-w-full mx-auto"
                  // style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Commercial</h5>
                  {/* <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Some Cool NickName
                  </p> */}
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div
              className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div className="px-6">
                <img
                  alt="..."
                  src="/turf.jpg"
                  style={{height: "236px"}}
                  className="shadow-lg rounded max-w-full mx-auto"
                  // style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Cross-training</h5>
                  {/* <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Some Cool NickName
                  </p> */}
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div
              className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div className="px-6">
                <img
                  alt="..."
                  src="/racks.jpg"
                  className="shadow-lg rounded max-w-full mx-auto"
                  
                  // style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Warehouse</h5>
                  {/* <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Some Cool NickName
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Header Section --> */}
      <section className="pb-20 relative block bg-black text-white">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{height: "80px", transform: "translateZ(0px)"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white uppercase">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4">
                Contact us to ask any questions, aquire a membership, talk to
                our staff or anything else.
              </p>
            </div>
          </div>
        </div>
      </section>
<Contact />
      </main>

<Footer />
    </div>
  )
}

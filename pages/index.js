import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
                  Feel The <span className="text-red-700">Power</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Welcome to Elite Fiteness. We are a fitness and training
                  center that focuses on pushing you to your absolute limit.
                  
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
            </div>
            <div
              className="w-full md:w-5/12 ml-auto mr-auto px-4 "
              data-aos="fade-left"
            >
              <div className="md:pr-12 ">
                <small className="text-red-700">About our gym</small>
                <h3 className="text-4xl uppercase font-bold">Rise to new levels</h3>
                <p className="mt-4 text-lg leading-relaxed">
                We are a 24/7 workout facility offering commercial equipment, 
                warehouse-style lifting and cross-training to help you create
                 a lasting change in your life.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-3 mr-3 text-red-700"
                          ><i className="fas fa-dumbbell fa-2x"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-xl">
                          The latest & greatest gym equipment
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-3 mr-3 text-red-700"
                          ><i className="fas fa-hard-hat fa-2x"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-xl">
                          5-inch, quality foam floor padding
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-3 mr-3 text-red-700"
                          ><i className="fas fa-users fa-2x"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-xl">3 professional trainers</h4>
                      </div>
                    </div>
                  </li>
                </ul>
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
                Meet Our Trainers
              </h2>
              <p className="text-lg leading-relaxed m-4">
                Our trainers are are here to dedicate the time and effort that
                you need to get in the best shape of your life
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
                  src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  className="shadow-lg rounded max-w-full mx-auto"
                  style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Mr Rogers</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Some Cool NickName
                  </p>
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
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  className="shadow-lg rounded max-w-full mx-auto"
                  style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Strawberry Shortcake</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Some Cool NickName
                  </p>
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
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  className="shadow-lg rounded max-w-full mx-auto"
                  style={{maxWidth: "250px"}}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Ronald McDonald</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Some Cool NickName
                  </p>
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
                our trainers or anything else
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Form --> */}
      <section className="relative block py-24 lg:pt-0 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                data-aos="fade-up-right"
              >
                <div className="flex-auto p-5 lg:p-10 bg-red-700 text-white">
                  <h4 className="text-2xl font-semibold">Get in touch</h4>
                  <p className="leading-relaxed mt-1 mb-4">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      for="full-name"
                      >Full Name</label
                    ><input
                      type="text"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{transition: "all 0.15s ease 0s"}}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{transition: "all 0.15s ease 0s"}}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      for="message"
                      >Message</label
                    ><textarea
                      rows="4"
                      cols="80"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{transition: "all 0.15s ease 0s"}}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

<Footer />
    </div>
  )
}

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Check from '../components/Icons/Check'
export default function Info() {



  return (
    <>
      <Header />
      <div className="relative pt-12 pb-32 px-6 sm:px-24 2xl:px-48 2xl:mx-32 content-center items-center justify-center bg-white text-black tracking-wide">

        <div className="mb-24">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-8">Membership Options</h2>

          <div className="w-full grid lg:grid-cols-3 gap-x-6 gap-y-4">

            <div className="border border-gray-200 shadow-xl rounded pt-6 px-4 lg:hover:scale-105 transform duration-700 flex flex-col">
              <div className="text-center">
                <p className="text-4xl mb-1 text-gray-900">Monthly</p>
                <p className="text-2xl mb-4">$49.99<span className="text-gray-500 text-lg"> / Month</span></p>
              </div>

              <ul className="text-gray-700 text-lg flex-1">
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 24/7 access</li>
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 10% off shop items</li>
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 1 free guest pass for a friend</li>
              </ul>

              <a href="https://elitefitness.gymmasteronline.com/portal/signup?session=eyJsYW5ndWFnZSI6ImVuIn0.X95cYQ.EmSwnD0HhbsqtAkem9cyT_UzR-o">
                <button className="px-4 py-3 focus:outline-none border hover:bg-red-700 hover:text-white w-full rounded my-4 text-lg">Sign Up</button>
                </a>
            </div>

            <div className="border border-gray-200 shadow-xl rounded pt-6 px-4 lg:hover:scale-105 transform duration-700 flex flex-col">
              <div className="text-center">
                <p className="text-4xl mb-1 text-gray-900">Monthly Plus</p>
                <p className="text-2xl mb-4">$149.99<span className="text-gray-500 text-lg"> / Month</span></p>
              </div>


              <ul className="text-gray-700 text-lg flex-1">
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 24/7 access</li>
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> Join any classes</li>
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 20% off shop items</li>
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> 2 free guest passes for friends</li>
              </ul>

              <a href="https://elitefitness.gymmasteronline.com/portal/signup?session=eyJsYW5ndWFnZSI6ImVuIn0.X95cYQ.EmSwnD0HhbsqtAkem9cyT_UzR-o">
                <button className="px-4 py-3 focus:outline-none border hover:bg-red-700 hover:text-white w-full rounded my-4 text-lg">Sign Up</button>
                </a>
            </div>

            <div className="border border-gray-200 shadow-xl rounded pt-6 px-4 lg:hover:scale-105 transform duration-700 flex flex-col">
              <div className="text-center">
                <p className="text-4xl mb-1 text-gray-900">Day Pass</p>
                <p className="text-2xl mb-4">$9.99<span className="text-gray-500 text-lg"> / Day</span></p>
              </div>
              <ul className="text-gray-700 text-lg flex-1">
                <li className="flex items-center"><Check class="h-5 w-5 mr-2 text-green-600" /> Access to the gym all day while staffed</li>
              </ul>

              <a href="https://elitefitness.gymmasteronline.com/portal/signup?session=eyJsYW5ndWFnZSI6ImVuIn0.X95cYQ.EmSwnD0HhbsqtAkem9cyT_UzR-o">
                <button className="px-4 py-3 focus:outline-none border hover:bg-red-700 hover:text-white w-full rounded my-4 text-lg">Sign Up</button>
                </a>
            </div>

          </div>
        </div>

          <div className="mb-8">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Contact Us</h2>

            <div className="lg:flex justify-between">
            <div className="mb-1">
              <p className="text-lg sm:text-2xl">Our Location:</p>
              <p className="text-lg text-gray-600">10416 Spencer Hwy, La Porte, TX 77571</p>
            </div>

            <div className="mb-1">
              <p className="text-lg sm:text-2xl">Call Us:</p>
              <p className="text-lg text-gray-600">(832)348-6377</p>
            </div>

            <div className="mb-1">
              <p className="text-lg sm:text-2xl">Hours:</p>
              <p className="text-lg text-gray-600">Open 24/7</p>
            </div>

            <div className="mb-1">
              <p className="text-lg sm:text-2xl">Find Us:</p>
              <a target="_blank" href="https://goo.gl/maps/VNaWwvd7bZwvhnUv7"><p className="text-lg text-gray-600">Map it</p></a>
            </div>
            </div>
          </div>


<div>
      <section className="text-gray-700">
        <div className="container pt-16">
          <div className=" mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5  sm:mb-2 ">
            <div className="w-full lg:w-1/2 lg:pr-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  Can I install/upload anything I want on there?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I migrate to another site?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>


      </div>
      <Footer />
    </>
  )
}
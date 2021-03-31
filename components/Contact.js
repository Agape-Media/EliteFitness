import { Formik, Field, Form } from 'formik';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg'
import { FiCheck } from 'react-icons/fi'
export default function Contact() {

  const [sending, isSending] = useState(false)
  const [sent, setSent] = useState(false)


  function sendEmail(e) {
    e.preventDefault();
    isSending(true)
    emailjs.sendForm('service_f3xpnvp', 'template_po79xij', e.target, 'user_MvIbM8ilY3M6tXegWE9cx')
      .then((result) => {
          console.log(result.text);          
          setTimeout(function() { 
            isSending(false); 

            setSent(true); 
          }, 1000);
          document.getElementById("contactForm").reset();
          setTimeout(function() { 
            setSent(false); 
          }, 3000);
          
      }, (error) => {
          console.log(error.text);          
          setTimeout(function() { 
            isSending(false); 
          }, 1000);
          alert("Please try again. Message was not sent.")
      });
      
      
  }

  return (
    <>
    
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
                  



                  <form id="contactForm" className="contact-form" onSubmit={sendEmail}>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="full-name"
                      >Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      
                      name="fullName"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{transition: "all 0.15s ease 0s"}}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="email"
                      >Email</label>
                    <input
                      id="email"
                      name="email"
                      
                      type="email"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{transition: "all 0.15s ease 0s"}}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="message"
                      >Message</label>
                      <textarea
                      id="message"
                      name="message"
                      
                      rows="4"
                      cols="80"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                      required
                    />
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      className={
                        (sending ? "cursor-not-allowed opacity-95" : "cursor-pointer") + 
                        (sent ? "cursor-not-allowed bg-green-400" : "cursor-pointer") + 
                        " flex justify-center items-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase w-48  py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"}
                      type="submit"
                      style={{transition: "all 0.15s ease 0s"}}
                      disabled={sending}
                    >
                      {sending && <CgSpinner className="animate-spin mr-2 w-5 h-5" />}
                      {sent && <FiCheck className="text-white mr-2 w-5 h-5" />}
                      {sent ? "Message Sent!" : "Send Message"}
                      
                    </button>
                  </div>
                  </form>
               





                  {/* <Formik
      initialValues={{
        fullName: '',
        email: '',
        message: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        // e.preventDefault();
console.log(values)
    emailjs.sendForm('gmail', 'template_wzvw0wd', e.target, 'user_MvIbM8ilY3M6tXegWE9cx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      }}
    >
      <Form>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="full-name"
                      >Full Name</label>
                    <Field
                      id="fullName"
                      name="fullName"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{transition: "all 0.15s ease 0s"}}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="email"
                      >Email</label>
                    <Field
                      id="email"
                      name="email"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{transition: "all 0.15s ease 0s"}}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-xs font-bold mb-2"
                      htmlFor="message"
                      >Message</label>
                      <Field
                      id="message"
                      name="message"
                      rows="4"
                      cols="80"
                      className="px-3 py-3 text-black placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{transition: "all 0.15s ease 0s"}}
                    >
                      Send Message
                    </button>
                  </div>
                  </Form>
    </Formik>
                */}
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
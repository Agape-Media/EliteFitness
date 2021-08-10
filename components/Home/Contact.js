import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiCheck } from "react-icons/fi";

export default function Contact() {
  const [sending, isSending] = useState(false);
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    isSending(true);
    emailjs
      .sendForm(
        "service_f3xpnvp",
        "template_po79xij",
        e.target,
        "user_MvIbM8ilY3M6tXegWE9cx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(function () {
            isSending(false);

            setSent(true);
          }, 1000);
          document.getElementById("contactForm").reset();
          setTimeout(function () {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(function () {
            isSending(false);
          }, 1000);
          alert("Please try again. Message was not sent.");
        }
      );
  }

  return (
    <>
      <div className="mt-20 px-4 lg:px-2">
        <p className="text-4xl text-center font-bold mb-12 text-gray-800">
          Contact
        </p>
        <form id="contactForm" className="contact-form" onSubmit={sendEmail}>
          <Input id="fullName" type="text" name="fullName" placeholder="Name" />
          <Input id="email" name="email" type="email" placeholder="Email" />
          <TextArea />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={sending}
              className={`
              
              ${
                sending || sent
                  ? "cursor-not-allowed opacity-95"
                  : "cursor-pointer"
              }
              ${
                sent
                  ? "hover:border-green-400 hover:text-green-400 text-green-400 "
                  : null
              }
              
             flex justify-center items-center text-xl font-light mt-8 border border-transparent hover:border-red-700 hover:text-red-700 px-4 py-2 transition duration-300 ease-in-out focus:outline-none`}
            >
              {sending && <CgSpinner className="animate-spin mr-2 w-5 h-5" />}
              {sent && <FiCheck className="text-green-400 mr-2 w-5 h-5" />}
              {sent ? "Message Sent!" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const Input = ({ placeholder, id, type, name }) => (
  <input
    id={id}
    type={type}
    name={name}
    className="border border-gray-400 w-full h-12 px-4 mb-10"
    placeholder={placeholder}
    required
  />
);

const TextArea = () => (
  <textarea
    id="message"
    name="message"
    rows="8"
    className="border border-gray-400 w-full px-4 py-4"
    placeholder="Message"
    required
  />
);

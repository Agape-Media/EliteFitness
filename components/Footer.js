export default function Footer() {
  return (
    <>
      <footer className="relative pt-40 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0px)" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="md:flex justify-around">
            <div className="w-full lg:w-6/12 px-4 pb-10 md:mb-0">
              <h4 className="text-3xl font-semibold text-gray-800">
                Follow us on social media
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 flex items-center space-x-4 ">
                <a href="https://www.facebook.com/elitefitnesslp">
                  <svg
                    className="w-5 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/elitefitnesslp/">
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4 tracking-wide pb-10 md:mb-0 px-4 ">
              <LinkItem label="10416 Spencer Hwy, La Porte, TX 77571" />
              <LinkItem href="tel:832-348-6377" label="(832)348-6377" />
              <LinkItem
                href="mailto:elitefitnesslp@gmail.com"
                label="elitefitnesslp@gmail.com"
              />
              <LinkItem
                blank
                href="https://goo.gl/maps/VNaWwvd7bZwvhnUv7"
                label="Map it"
              />
            </div>

            <div className="space-y-4 font-semibold tracking-wide pb-10 md:mb-0 px-4">
              {/* <LinkItem href="/cancelation" label="Membership Cancellation" /> */}
              <LinkItem href="/terms" label="Terms Of Use" />
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="sm:flex items-center justify-around w-full px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Powered/Designed by{" "}
                <a
                  href="https://agapeMedia.io"
                  className="underline text-gray-800"
                >
                  Agape Media
                </a>
              </div>
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © The Elite Fitness
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const LinkItem = ({ href, label, blank }) => (
  <p>
    <a target={blank && "_blank"} className="text-gray-800" href={href}>
      {label}
    </a>
  </p>
);

import React from "react";

export default function FAQ() {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container pt-16">
            <div className=" mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
            </div>
            <div className="lg:w-4/5  sm:mb-2 ">
              <div className="w-full lg:w-3/4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer focus:outline-none bg-gray-200 rounded-md py-2 px-4">
                    How old do I have to be?
                  </summary>

                  <span>
                    Ages 13-15 can workout accompanied by a parent member, but
                    still must have their own membership. Ages 16 and 17 can
                    join and workout without a parent, but must have parent
                    consent.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer focus:outline-none bg-gray-200 rounded-md py-2 px-4">
                    Do you offer personal training?
                  </summary>

                  <span>
                    Yes. Please contact our trainer, Andy Hughes, at{" "}
                    <a href="tel:832-984-8322">832-984-8322</a> or{" "}
                    <a href="mailto:andyhughes77@gmail.com">
                      andyhughes77@gmail.com
                    </a>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer focus:outline-none bg-gray-200 rounded-md py-2 px-4">
                    What is your cancellation policy?
                  </summary>

                  <span>
                    We require a 30 day notice for cancellation via our
                    cancellation form provided on the Home page of our website.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

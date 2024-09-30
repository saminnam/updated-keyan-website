import React from "react";
import CommonHero from "../Components/CommonHero";
import OurTeam from "../Components/OurTeam";

const AboutPage = () => {
  return (
    <>
      <section>
        <CommonHero title={"ABOUT US"} />
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
              <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    className="object-cover object-top origin-top scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                    alt=""
                  />
                </div>

                <div className="relative">
                  <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                    <img
                      className="object-cover scale-150 lg:origin-bottom-right"
                      src="https://i.pinimg.com/564x/dd/73/6a/dd736a9e5a565145ad50db6576ed78f7.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="absolute -translate-x-1/2 left-1/2 -top-16">
                  <img
                    className="w-32 h-32 img-rotate"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center xl:px-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Grow business with Celebration.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4 mt-10">
                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">10K+</h3>
                    <p className="text-sm text-gray-500">Customers</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">200K+</h3>
                    <p className="text-sm text-gray-500">Emails</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">500+</h3>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                How do we create success
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <ul className="max-w-md mx-auto mt-16 space-y-12">
              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                  {/* Product Design Icon */}
                  <svg
                    className="w-10 h-10 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 2l3 3-9 9L3 21l6-3 9-9-3-3zM3 21l3-9"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-black">
                    Product Design
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                  {/* Development Icon */}
                  <svg
                    className="w-10 h-10 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 7h2l4 8H9l3-8h2l3 8h1l4-8h2"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-black">
                    Development
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                  {/* Product Testing Icon */}
                  <svg
                    className="w-10 h-10 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 12l9 9m0-9l9-9"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-black">
                    Product Testing
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <OurTeam />
      </section>
    </>
  );
};

export default AboutPage;

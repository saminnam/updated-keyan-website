import React from "react";
import triangle from "../assets/triangle.png";
import MediaIcons from "../Components/MediaIcons";


const Hero = () => {
  
  return (
    <>
      <section className="relative bg-hero-pattern bg-cover h-[100vh] flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:pt-20">
          {/* Hero Title */}
          <div className="mx-auto mb-8 w-full max-w-4xl text-center">
            <h1 className="mb-4 text-4xl text-gray-200 font-serif font-bold md:text-6xl" data-aos="fade-down" data-aos-duration="2000">
              Crafting Your Digital Vision
              {/* <div className="hero_content">Crafting Your</div>
              <div className="hero_content ms-4">
                <span>Digital Vision</span>
              </div> */}
            </h1>
            <p className="mx-auto mb-5 max-w-lg text-sm text-gray-400 sm:text-xl md:mb-6 lg:mb-8" data-aos="fade-down">
              {" "}
              Building the Future of Technology, One Line of Code at a Time.
              Custom Software Solutions that Drive Results.{" "}
            </p>

            {/* Hero Buttons */}
            <div className="flex items-stretch justify-center" data-aos="fade-up" data-aos-duration="2000">
              <a
                href="#"
                className="mr-5 inline-block rounded-md bg-[#ff7222] px-8 py-4 text-center font-semibold text-gray-200 md:mr-6 lg:mr-8"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex flex-row items-center justify-center rounded-md border border-solid border-[#ff7222] px-6 py-3 font-bold text-white"
              >
                <p className="text-sm sm:text-base">Watch Demo</p>
              </a>
            </div>
          </div>

          {/* triangle animation section */}
          <div className="absolute">
            <img
              src={triangle}
              alt=""
              className="img-rotate w-[20px] opacity-60"
            />
          </div>
          <div className="absolute bottom-32 right-20">
            <img
              src={triangle}
              alt=""
              className="img-rotate w-[20px] opacity-60"
            />
          </div>
          <div className="absolute top-32 right-20">
            <img
              src={triangle}
              alt=""
              className="img-rotate w-[20px] opacity-60"
            />
          </div>
          {/* <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
        </div>
        <MediaIcons/>
      </section>
    </>
  );
};

export default Hero;

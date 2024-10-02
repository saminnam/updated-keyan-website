import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";

const logos = [
  "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FMicrosoft%20Logo.svg?alt=media&token=d9a0206b-8dfa-407e-af77-5c5d33abfbb3",
  "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPayPal%20Logo.svg?alt=media&token=73b2c12b-b86c-4e6c-8158-ea096d5bacb5",
  "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FGroup.svg?alt=media&token=a908887b-af31-4e54-997a-d5e4dc3be56a",
  "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FChase%20Logo.svg?alt=media&token=f179fc6d-e765-4969-8966-62ff6ec35e8f",
  "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FWalmart%20Logo.svg?alt=media&token=614d63e8-5961-4c97-8dc5-cf69669c3848"
];

const Hero = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Change the logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Adjust the time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        {/* Container */}
        <div className="mx-auto mt-10 w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl" data-aos="fade-up">
              Build Your Digital Presence with Keyan Technology
            </h1>
            <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8" data-aos="fade-up">
              Keyan Technology offers cutting-edge web and app development
              solutions tailored to your business needs.
            </p>
            {/* Button */}
            <a
              href="#"
              className="mr-6 inline-block items-center rounded-md bg-[#ff7222] px-8 py-4 text-center font-semibold text-white lg:mr-8"
            >
              Get Started
            </a>
          </div>
          {/* Carousel */}
          <ul className="mt-16 grid grid-cols-1 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
            {logos.map((logo, index) => (
              <li
                key={index}
                className={`flex justify-center transition-opacity duration-1000 ${
                  index === currentLogoIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={logo} alt={`Logo ${index}`} className="inline-block h-9" />
              </li>
            ))}
          </ul>
        </div>
        <img
          src={hero}
          alt="hero"
          className="absolute top-0 right-0 hidden md:block"
        />
      </header>
    </>
  );
};

export default Hero;

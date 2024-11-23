import { useEffect, useState } from "react";
import hero from "../assets/hero2.png";
import logo1 from "../assets/Microsoft Logo.svg";
import logo2 from "../assets/Paypal Logo.svg";
import logo3 from "../assets/Group.svg";
import logo4 from "../assets/Chase Logo.svg";
import logo5 from "../assets/Walmart Logo.svg";

const logos = [
  { logo: logo1, alt: "Microsoft Logo" },
  { logo: logo2, alt: "Paypal Logo" },
  { logo: logo3, alt: "Group Logo" },
  { logo: logo4, alt: "Chase Logo" },
  { logo: logo5, alt: "Walmart Logo" },
];

const Hero = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mx-auto mt-10 w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-bold md:text-6xl font-serif"
            data-aos="fade-down"
          >
            Build Your Digital Presence with Keyan Technologies
          </h1>
          <p
            className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8"
            data-aos="fade-down"
          >
            Keyan Technologies offers cutting-edge web and app development
            solutions tailored to your business needs.
          </p>
          <a
            href="#services"
            className="mr-6 inline-block items-center rounded-md hover:bg-transparent hover:text-[#006CB7] border border-[#006CB7] duration-300 transition-all bg-[#006CB7] px-8 py-4 text-center font-semibold text-white lg:mr-8"
          >
            Get Started
          </a>
        </div>
        <ul className="mt-16 grid grid-cols-1 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
          {logos &&
            logos.map((logoItem, index) => (
              <li
                key={index}
                className={`flex justify-center transition-opacity duration-1000 z-40 ${
                  index === currentLogoIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <img
                  src={logoItem.logo}
                  alt={`Logo ${logoItem.alt}`}
                  className="inline-block h-9"
                />
              </li>
            ))}
        </ul>
      </div>
      <img
        src={hero}
        alt="hero"
        className="absolute top-0 right-0 hidden md:block h-full"
      />
    </section>
  );
};

export default Hero;

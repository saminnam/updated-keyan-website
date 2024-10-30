import React, { useEffect, useState } from "react";
import wed_service from "../assets/web-service-bg.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [customers, setCustomers] = useState(0);
  const [emails, setEmails] = useState(0);
  const [projects, setProjects] = useState(0);

  // Increment function
  const incrementCounter = (setValue, targetValue) => {
    let count = 0;
    const increment = setInterval(() => {
      if (count < targetValue) {
        count += Math.ceil(targetValue / 100); // Increment step
        setValue(Math.min(count, targetValue)); // Set value ensuring it does not exceed target
      } else {
        clearInterval(increment);
      }
    }, 20); // Update every 20ms
  };

  useEffect(() => {
    incrementCounter(setCustomers, 100); // Set target for customers
    incrementCounter(setEmails, 2000); // Set target for emails
    incrementCounter(setProjects, 500); // Set target for projects
  }, []);

  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20 group">
        <div className="flex flex-col items-start text-center gap-5 mb-4">
          <div className="flex items-start justify-center flex-col gap-6">
            <h2
              className="text-3xl font-bold md:text-3xl font-serif"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              Get to Know Us
            </h2>
            <div className="lg:w-0 w-40 lg:group-hover:w-40 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
          </div>
        </div>
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col" data-aos="zoom-in-right">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Your Vision, Our Expertise, Perfectly Crafted.
            </h1>
            <p className="mb-6 max-w-2xl text-sm text-gray-500 sm:text-[18px] md:mb-10 lg:mb-12 leading-normal">
              Keyan Technologies specializes in Web Development, App
              Development, and Software Development. We deliver innovative
              digital solutions, from responsive websites and mobile apps to
              creative visuals, helping businesses thrive online. Our goal is to
              bring your ideas to life with cutting-edge technology and design.
            </p>

            {/* Hero Info */}
            <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">{customers}+</h3>
                <p className="text-sm text-gray-500">Client's</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">{emails}+</h3>
                <p className="text-sm text-gray-500">Emails</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">{projects}+</h3>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>
            <div>
              <Link to={"/about"}>
                {" "}
                <button className="px-10 py-4 rounded-md hover:bg-transparent hover:text-[#006CB7] border border-[#006CB7] duration-300 transition-all bg-[#006CB7] text-center font-semibold text-white mt-8">
                  More Info
                </button>
              </Link>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src={wed_service}
            alt="Web Service"
            className="inline-block h-full rounded-lg w-full max-w-2xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </header>
  );
};

export default AboutUs;

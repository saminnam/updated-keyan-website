import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

const Portfolio = () => {
  const settings = {
    dots: true, // Enable dots
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="group">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex items-center justify-center flex-col gap-3">
          <h2
            className="text-3xl font-bold md:text-5xl font-serif"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Portfolio
          </h2>
          <div className="w-0 group-hover:w-40 transition-all duration-500 h-[5px] bg-[#ff7222] rounded"></div>
          <p className="mb-8 mt-4 max-w-xl text-base text-center text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            Explore our diverse portfolio showcasing successful software
            solutions that demonstrate our expertise in driving innovation and
            delivering exceptional results for our clients.
          </p>
        </div>
        {/* Content */}
        <div className="slider-container">
          <Slider {...settings}>
            <a
              href="#"
              className="rounded-md p-4 lg:p-2"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <img
                src={project1}
                alt="Project 1"
                className="mb-3 inline-block rounded h-60 w-full object-cover lg:w-96"
              />
              <p className="mb-1 text-center font-bold">Project 2</p>
              <p className="text-center text-sm text-gray-500">Web Design</p>
            </a>
            <a
              href="#"
              className="rounded-md p-4 lg:p-2"
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            >
              <img
                src={project2}
                alt="Project 2"
                className="mb-3 inline-block rounded h-60  w-full  object-cover lg:w-96"
              />
              <p className="mb-1 text-center font-bold">Project 3</p>
              <p className="text-center text-sm text-gray-500">Web Design</p>
            </a>
            <a
              href="#"
              className="rounded-md p-4 lg:p-2"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <img
                src={project3}
                alt="Project 3"
                className="mb-3 inline-block rounded h-60 object-cover w-full lg:w-96"
              />
              <p className="mb-1 text-center font-bold">Project 4</p>
              <p className="text-center text-sm text-gray-500">E-Commerce</p>
            </a>
            <a
              href="#"
              className="rounded-md p-4 lg:p-2"
              data-aos="zoom-out-up"
            >
              <img
                src={project4}
                alt="Placeholder"
                className="mb-3 inline-block rounded h-60 object-cover w-full lg:w-96"
              />
              <p className="mb-1 text-center font-bold">Project 5</p>
              <p className="text-center text-sm text-gray-500">Web Design</p>
            </a>
            <a
              href="#"
              className="rounded-md p-4 lg:p-2"
              data-aos="zoom-out-up"
            >
              <img
                src={project5}
                alt="Placeholder"
                className="mb-3 inline-block rounded h-60 object-cover w-full lg:w-96"
              />
              <p className="mb-1 text-center font-bold">Project 1</p>
              <p className="text-center text-sm text-gray-500">Web Design</p>
            </a>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

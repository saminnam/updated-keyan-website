import React,{useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Portfolio = () => {
  // const projects = [
  //   {
  //     id: 1,
  //     image: project1,
  //     title: "Project 1",
  //     description: "Web Design",
  //   },
  //   {
  //     id: 2,
  //     image: project2,
  //     title: "Project 2",
  //     description: "Web Design",
  //   },
  //   {
  //     id: 3,
  //     image: project3,
  //     title: "Project 3",
  //     description: "E-Commerce",
  //   },
  //   {
  //     id: 4,
  //     image: project4,
  //     title: "Project 4",
  //     description: "Web Design",
  //   },
  //   {
  //     id: 5,
  //     image: project5,
  //     title: "Project 5",
  //     description: "Web Design",
  //   },
  // ];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = () => {
    axios
      .get("http://localhost:3000/api/portfolio")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => console.log(error));
  };

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
          <div className="w-40 lg:w-0 lg:group-hover:w-40 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
          <p className="mb-8 mt-4 max-w-xl text-base text-center text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            Explore our diverse portfolio showcasing successful software
            solutions that demonstrate our expertise in driving innovation and
            delivering exceptional results for our clients.
          </p>
        </div>
        {/* Content */}
        <div className="slider-container">
          <Slider {...settings}>
            {projects.map((project) => (
              <a
                key={project.id}
                href="#"
                className="rounded-md p-4 lg:p-2"
                data-aos="zoom-out-up"
                data-aos-duration={project.id * 1000} // Dynamically set the duration
              >
                <img
                  src={`http://localhost:3000/Images/${project.image}`}
                  alt={project.title}
                  className="mb-3 inline-block rounded h-60 w-full object-cover lg:w-96"
                />
                <p className="mb-1 text-center font-bold">{project.title}</p>
                <p className="text-center text-sm text-gray-500">
                  {project.description}
                </p>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

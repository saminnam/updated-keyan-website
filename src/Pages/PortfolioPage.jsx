import React, { useEffect, useState } from "react";
import CommonHero from "../Components/CommonHero";
import axios from "axios";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = () => {
    axios
      .get("http://localhost:3000/api/portfolio")
      .then((res) => {
        setPortfolios(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="group">
      <CommonHero title={"PORTFOLIOS"} />
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <div className="flex items-center justify-center flex-col gap-3">
            <h2
              className="text-3xl font-bold font-serif md:text-5xl"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              Our Projects
            </h2>
            <div className="lg:w-0 w-40 lg:group-hover:w-40 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
          </div>
          {/* Content */}
          <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {portfolios.map((project) => (
              <a
                key={project._id} // Use the unique identifier from your data
                href={project.websiteUrl} // Assuming websiteUrl holds the link
                className="flex flex-col rounded-md p-4 lg:p-2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={`http://localhost:3000/Images/${project.image}`} // Adjust based on your API response
                  alt={project.title} // Use the title for the alt text
                  className="mb-3 inline-block lg:h-60 w-full object-cover lg:w-96 rounded-lg"
                />
                <p className="mb-1 text-center font-bold">{project.title}</p> {/* Use project.title */}
                <p className="text-center text-sm text-gray-500">
                  {project.category} {/* Ensure category is part of your data */}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortfolioPage;

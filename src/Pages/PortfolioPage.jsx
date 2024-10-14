import React from "react";
import CommonHero from "../Components/CommonHero";

// Array to hold project data
const projects = [
  {
    id: 1,
    name: "Project Alpha",
    category: "Web Design",
    imageUrl:
      "https://i.pinimg.com/564x/e7/f8/ad/e7f8ad06cc30b42e44211c0d2093de54.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Project Beta",
    category: "Web Development",
    imageUrl:
      "https://i.pinimg.com/564x/ad/a4/2f/ada42f48b0ea34ea5df1f08b276db9e9.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Project Gamma",
    category: "App Design",
    imageUrl:
      "https://i.pinimg.com/564x/39/28/8d/39288d0c1eb50e4854e9d34d6182702f.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Project Delta",
    category: "Graphic Design",
    imageUrl:
      "https://i.pinimg.com/736x/8d/e4/14/8de414776bb73ac61f991928278a7282.jpg",
    link: "#",
  },
  {
    id: 5,
    name: "Project Epsilon",
    category: "Software Development",
    imageUrl:
      "https://i.pinimg.com/736x/35/c3/0d/35c30d31ef2313b99864f601ebde3c4f.jpg",
    link: "#",
  },
  {
    id: 6,
    name: "Project Zeta",
    category: "UI/UX Design",
    imageUrl:
      "https://i.pinimg.com/564x/4c/75/52/4c755267bc1865c6d73c83beb43e09f7.jpg",
    link: "#",
  },
];

const PortfolioPage = () => {
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
            <div className="w-0 group-hover:w-40 transition-all duration-500 h-[5px] bg-[#ff7222] rounded"></div>
          </div>
          {/* Content */}
          <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="flex flex-col rounded-md p-4 lg:p-2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="mb-3 inline-block lg:h-60 w-full object-cover lg:w-96 rounded-lg"
                />
                <p className="mb-1 text-center font-bold">{project.name}</p>
                <p className="text-center text-sm text-gray-500">
                  {project.category}
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

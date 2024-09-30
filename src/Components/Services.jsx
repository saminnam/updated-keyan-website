import React from "react";

const Services = () => {
  // Array of service items
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "In today's digital landscape, a strong online presence is crucial for success. Our web development services focus on creating responsive, user-friendly websites tailored to your business needs.",
    },
    {
      title: "APP DEVELOPMENT",
      description:
        "We specialize in building innovative mobile applications that deliver exceptional user experiences. Our team combines creativity and technical expertise to create apps tailored to your business goals.",
    },
    {
      title: "WEB DESIGN",
      description:
        "Our web design services focus on creating visually stunning and user-friendly websites. We prioritize aesthetics and functionality to ensure your online presence captivates visitors.",
    },
  ];

  return (
    <section className="bg-[#fcfcfc]">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center justify-center flex-col gap-3">
            <h2 className="text-3xl font-bold md:text-5xl">Our Services</h2>
            <div className="w-[180px] h-[5px] bg-[#ff7222] rounded"></div>
          </div>

          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
          </p>
        </div>
        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid gap-6 text-center card_service shadow-lg border-solid text-black transition ease-linear"
            >
              <div className="card2_service p-8 md:p-10 rounded-md">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-md mt-5">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

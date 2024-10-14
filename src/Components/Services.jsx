import React from "react";

const Services = () => {
  // Array of service items
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Boost Your Website’s Performance with Our Expert Web Development Services. Unlock the full potential of your website with our skilled web development team. ",
    },
    {
      title: "APP DEVELOPMENT",
      description:
        "Turn Your Business Idea into a High-Performing Mobile App with Our Expert App Developers. Bring your business vision to life with a custom mobile app designed by our experienced developers.",
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Create Visually Stunning, User-Friendly Websites with Our Web Design Services. Elevate your online presence with our expert web design services. ",
    },
    {
      title: "WEB DESIGN",
      description:
        "Build Captivating, User-Friendly Websites with Our Professional Web Design Services. Our web design services are tailored to create visually stunning, responsive websites that prioritize both aesthetics and functionality.",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description:
        "Our e-commerce solutions help you build powerful online stores with seamless payment integration, user-friendly designs, and robust product management. Let us help you drive sales and grow your business with a custom e-commerce website.",
    },
    {
      title: "TECHNICAL CONSULTING",
      description:
        "Our technical consulting services provide tailored guidance to optimize your IT infrastructure and implement scalable solutions, ensuring enhanced performance and reduced costs. Partner with us to navigate the digital landscape and accelerate your transformation for sustainable growth.",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] group">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center justify-center flex-col gap-3">
            <h2 className="text-3xl font-bold font-serif md:text-5xl" data-aos="flip-down">
              Our Services
            </h2>
            <div className="w-0 group-hover:w-40 transition-all duration-500 h-[5px] bg-[#ff7222] rounded"></div>
          </div>

          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            We offer a comprehensive range of software solutions, including
            custom software development, mobile app development, and web
            development, tailored to meet your business needs.
          </p>
        </div>
        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-lg hover:border-[#ff7222] border-[3px] hover:rounded-xl hover:scale-90 text-center card_service shadow-lg border-solid text-black transition ease-linear"
              data-aos="fade-up"
            >
              <div className="card2_service p-8 md:p-10 rounded-md">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-md mt-5 text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

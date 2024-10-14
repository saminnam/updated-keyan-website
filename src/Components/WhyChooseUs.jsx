import React from "react";

const WhyChooseUs = () => {
  // Array of services
  const services = [
    {
      title: "Skilled Professionals",
      description:
        " Our team of skilled professionals is committed to providing top-notch software solutions tailored to meet your business goals and drive exceptional results.",
    },
    {
      title: "Product Design",
      description:
        "Our team of expert designers works tirelessly to create visually stunning and user-friendly website designs that capture the essence of your brand.",
    },
   
    {
      title: "Product Testing",
      description:
        "Our comprehensive testing processes ensure that your products are flawless, providing users with a seamless experience while maximizing your ROI.",
    },
    {
      title: "Delivery",
      description:
        "We prioritize timely delivery, ensuring that your projects are completed on schedule without compromising on quality. We prioritize timely delivery",
    },
  ];

  return (
    <section className="py-10 group">
      <div className="font-inter mx-auto h-auto w-full max-w-screen-2xl">
        <div className="px-6 py-6 lg:px-20 lg:py-4">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="flex items-center justify-center flex-col gap-6">
              <h2
                className="text-3xl font-serif font-bold md:text-5xl"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                Why Choose Us?
              </h2>
              <div className="w-0 group-hover:w-60 transition-all duration-500 h-[5px] bg-[#ff7222] rounded"></div>
            </div>

            <p className="mb-8 mt-4 max-w-2xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              Design the Concept of Your Business Idea Now offers structured
              guidance, powerful tools for brainstorming and market analysis,
              and tailored feedback to help transform your vision into a
              successful business plan.
            </p>
          </div>

          <div className="flex items-center lg:flex-row gap-10 lg:gap-0 flex-wrap justify-center lg:justify-between">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-[1px] choose_card border-solid border-gray-200 w-[320px] h-auto p-10 flex flex-col gap-8 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

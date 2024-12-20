const WhyChooseUs = () => {
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
    <section className="py-16 bg-choose-pattern bg-fixed bg-cover bg-no-repeat">
      <div className="font-inter mx-auto h-auto w-full max-w-screen-2xl">
        <div className="px-6 py-6 lg:px-20 lg:py-4">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="flex items-center justify-center flex-col gap-6">
              <h2
                className="text-3xl font-serif text-white font-bold md:text-5xl"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                Why Choose Us?
              </h2>
              <div className="w-40 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
            </div>
            <p className="mb-8 mt-4 max-w-2xl text-base text-gray-700 md:mb-12 md:text-lg lg:mb-16">
              Design the Concept of Your Business Idea Now offers structured
              guidance, powerful tools for brainstorming and market analysis,
              and tailored feedback to help transform your vision into a
              successful business plan.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-4 gap-5 md:grid-cols-2"
            data-aos="fade-down"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative block max-w-sm max-h-80 bg-white cursor-pointer duration-300 ease-linear hover:shadow-lg hover:scale-105 transition-all hover:bg-gradient-to-b hover:from-cyan-200 hover:to-teal-200 rounded-lg p-8 overflow-hidden z-0 font-sans group"
              >
                <p className="text-gray-800 text-lg font-bold mb-2">
                  {service.title}
                </p>
                <p className="text-base font-normal leading-6 text-brown-600 transition-all duration-500 ease-out">
                  {service.description}
                </p>
                <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-800 rounded-tr-md rounded-bl-3xl">
                  <div className="-mt-1 -mr-1 text-white font-mono">→</div>
                </div>
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-gradient-to-br from-gray-800 to-blue-800 rounded-full scale-100 transform origin-center transition-transform duration-300 ease-out group-hover:scale-700 z-[-1]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

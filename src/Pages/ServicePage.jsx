import { useState, useEffect } from "react";
import GlobalTitle from "../Components/GlobalTitle";
import AOS from "aos";
import tag from "../assets/tag.png";
import img1 from "../assets/webdevelopment.png";
import img2 from "../assets/software.png";
import img3 from "../assets/appdevelopment.png";
import img4 from "../assets/graph.png";

const ServicePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedService, setSelectedService] = useState("Web Development");

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedService]);

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer:
        "We leverage cutting-edge technologies such as React, Angular, Node.js, and Laravel to create robust, scalable web applications. Our tech stack is designed to maximize performance, enhance user experience, and future-proof your business.",
    },
    {
      question: "Can you develop mobile apps for both iOS and Android?",
      answer:
        "Absolutely! Our team specializes in developing native and cross-platform apps using frameworks like Flutter and React Native, ensuring seamless performance on both iOS and Android devices.",
    },
    {
      question: "Do you offer custom software development services?",
      answer:
        "Yes, we excel in building custom software solutions that are tailored to meet your business requirements. Our software is designed for scalability, reliability, and efficiency, solving your unique challenges with innovative approaches.",
    },
    {
      question: "What graphic design services do you provide?",
      answer:
        "Our design team delivers exceptional graphic design services, including logo design, full-scale branding, UI/UX design, and marketing collateral. We create designs that visually communicate your brand's identity and values effectively.",
    },
  ];

  const serviceContent = {
    "Web Development": {
      title: "Web Development",
      description1:
        "Our web development team is dedicated to creating visually stunning, fully responsive websites that adapt seamlessly across all devices. We focus on performance optimization, security features, and crafting engaging user experiences that convert visitors into customers.",
      description2:
        "Whether you need an e-commerce platform, a content-rich website, or a complex web application, we deliver solutions aligned with your business objectives. Our expertise in cutting-edge web technologies ensures your website will stand out in today's competitive digital landscape.",
      image: img1,
    },
    "Software Development": {
      title: "Software Development",
      description1:
        "We build high-performance, scalable software solutions designed to optimize workflows and solve complex business challenges. Our approach to custom software development is rooted in deep technical expertise, strategic vision, and a focus on results.",
      description2:
        "From enterprise-grade applications to cloud-based solutions, we deliver software that enhances productivity and drives growth. Our agile development process ensures flexibility and rapid deployment, while maintaining the highest standards of quality.",
      image: img2,
    },
    "App Development": {
      title: "App Development",
      description1:
        "Our app development services go beyond creating functional apps – we craft mobile experiences that users love. We prioritize intuitive design, fluid interactions, and top-notch performance across both iOS and Android platforms.",
      description2:
        "Whether you're looking to launch a new app or optimize an existing one, we ensure that your mobile presence is aligned with your business goals and delivers a delightful user experience.",
      image: img3,
    },
    "Graphic Designing": {
      title: "Graphic Designing",
      description1:
        "Our graphic design services are crafted to elevate your brand's visual identity. From creating standout logos to comprehensive branding, our team combines creativity with strategic thinking to ensure your brand resonates with your audience.",
      description2:
        "Whether it's through digital media, print, or packaging, we ensure your brand is consistently represented across all platforms with stunning visuals that capture attention and communicate your message clearly.",
      image: img4,
    },
  };

  return (
    <>
      <GlobalTitle title={"SERVICES"} />
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20">
        <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-24">
          <div>
            <div className="sticky top-24 flex flex-col gap-12">
              <div className="lg:w-[450px] w-full text-[#006CB7] shadow-xl flex flex-col items-center justify-center gap-7 py-20 px-14 rounded-md">
                {Object.keys(serviceContent).map((service) => (
                  <div
                    key={service}
                    onClick={() => handleServiceClick(service)}
                    className={`group cursor-pointer text-lg font-medium hover:bg-[#006CB7] hover:text-white transition ease-in-out border-[#006CB7] border-[2px] py-4 w-full rounded-md flex justify-between px-5 items-center ${
                      selectedService === service
                        ? "bg-[#006CB7] text-white"
                        : ""
                    }`}
                  >
                    {service}
                    <i className="bi bi-arrow-up-right transition duration-1000 group-hover:translate-x-4"></i>
                  </div>
                ))}
              </div>
              <div className="flex flex-col lg:w-[450px] w-full bg-slate-200 items-center gap-8 py-20 px-28 text-center rounded-md">
                <img src={tag} alt="" />
                <div className="flex flex-col items-center gap-1">
                  <p className="text-xl font-medium">Call Us Anytime</p>
                  <h4 className="text-2xl font-medium">
                    <i className="bi bi-telephone"></i> +91 98402 34475
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Service Content */}
          <div className="lg:w-[800px] w-full" data-aos="fade-up">
            <img
              src={serviceContent[selectedService].image}
              alt={serviceContent[selectedService].title}
              className="w-full h-[420px] rounded-md"
              loading="lazy"
            />

            <div>
              <h2 className="text-4xl font-bold mt-6">
                {serviceContent[selectedService].title}
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {serviceContent[selectedService].description1}
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {serviceContent[selectedService].description2}
              </p>
            </div>
            {/* Features Section */}
            <div className="mt-10 flex items-start lg:flex-row flex-col justify-between gap-8">
              <div className="flex-1 shadow-lg p-5 group">
                <i className="bi bi-code-slash text-4xl text-blue-600"></i>
                <h3 className="font-medium text-xl py-3">
                  Innovative Solutions
                </h3>
                <p className="text-gray-600 text-lg text-justify">
                  We leverage the latest technologies to provide innovative
                  solutions that give you a competitive edge.
                </p>
              </div>
              <div className="flex-1 shadow-lg p-5">
                <i className="bi bi-shield-check text-4xl text-green-600"></i>
                <h3 className="font-medium text-xl py-3">Robust Security</h3>
                <p className="text-gray-600 text-lg text-justify">
                  Our robust security measures incorporate advanced encryption,
                  multi-factor authentication.
                </p>
              </div>
              <div className="flex-1 shadow-lg p-5">
                <i className="bi bi-graph-up-arrow text-4xl text-red-600"></i>
                <h3 className="font-medium text-xl py-3">Scalable Growth</h3>
                <p className="text-gray-600 text-lg text-justify">
                  We design systems that can scale with your business,
                  accommodating growth and changing needs.
                </p>
              </div>
            </div>
            {/* Benefits Section */}
            <div className="border-t mt-10 pt-10 flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Our Benefits</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Partnering with us provides numerous advantages to propel your
                  business forward.
                </p>
                <ul className="list-none mt-6 space-y-4">
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Customized solutions tailored to your business needs.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Expert team dedicated to delivering high-quality results.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Efficient and scalable solutions for long-term growth.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Comprehensive support and maintenance services.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Expert Approach</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our team follows a systematic, client-centric approach to
                  deliver value at every step of the project lifecycle.
                </p>
                <ul className="list-none mt-6 space-y-4">
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Thorough analysis of your business requirements.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Agile development methodology for flexibility.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Comprehensive testing for bug-free deployment.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-xl text-[#006CB7] mr-3"></i>
                    <p className="text-gray-600">
                      Continuous monitoring and optimization post-launch.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* FAQ Section */}
            <div className="mt-10">
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item p-4 border border-gray-200 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
                      openFAQ === index ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium text-gray-800">
                        {faq.question}
                      </h3>
                      <i
                        className={`bi ${
                          openFAQ === index
                            ? "bi-dash-circle-fill"
                            : "bi-plus-circle-fill"
                        } text-lg`}
                      ></i>
                    </div>
                    <div
                      className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                        openFAQ === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="mt-3 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;

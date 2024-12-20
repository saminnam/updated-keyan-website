import {
  FaChartLine,
  FaHandshake,
  FaBullseye,
  FaUsers,
  FaLaptopCode,
  FaRegLightbulb,
} from "react-icons/fa";

const benefitsData = [
  {
    icon: (
      <FaChartLine className="text-8xl transition-all duration-500 text-[#006CB7] " />
    ),
    title: "Boost Business Growth",
    description:
      "We provide comprehensive strategies to help your business thrive in a competitive market. With our proven methods, unlock new opportunities, increase revenue, and achieve measurable success.",
    aos: "zoom-out",
  },
  {
    icon: (
      <FaHandshake className="text-8xl transition-all duration-500 text-[#006CB7]" />
    ),
    title: "Build Strong Partnerships",
    description:
      "Our service focuses on creating meaningful connections with your clients and partners. Through transparent communication and collaborative solutions, we help you establish trust and long-term relationships.",
    aos: "zoom-in",
  },
  {
    icon: (
      <FaBullseye className="text-8xl transition-all duration-500 text-[#006CB7]" />
    ),
    title: "Targeted Marketing",
    description:
      "Reach your audience effectively with our customized marketing strategies. We utilize data analytics to identify key demographics and deliver campaigns that drive engagement and conversions.",
    aos: "zoom-out",
  },
  {
    icon: (
      <FaUsers className="text-8xl transition-all duration-500 text-[#006CB7]" />
    ),
    title: "Enhance Customer Engagement",
    description:
      "Transform the way you connect with your audience. Our services are designed to create personalized interactions that build brand loyalty, improve satisfaction, and elevate the overall customer experience.",
    aos: "zoom-out",
  },
  {
    icon: (
      <FaLaptopCode className="text-8xl transition-all duration-500 text-[#006CB7]" />
    ),
    title: "Leverage Advanced Technology",
    description:
      "We integrate the latest tools and technologies to optimize your operations. From automation to data management, our solutions drive efficiency, reduce costs, and position you for future growth.",
    aos: "zoom-in",
  },
  {
    icon: (
      <FaRegLightbulb className="text-8xl transition-all duration-500 text-[#006CB7]" />
    ),
    title: "Innovative Solutions",
    description:
      "Our creative approach helps solve complex challenges and deliver impactful results. With cutting-edge strategies, we ensure your business stays ahead in an ever-evolving digital landscape.",
    aos: "zoom-out",
  },
];

const Benefits = () => {
  return (
    <section className="max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20">
      <div className="flex flex-col items-center text-center">
        <div className="flex mb-5">
          <h1 className="text-sm border-b border-[#006CB7] lg:text-lg text-[#006CB7] font-semibold">
            Key Business Benefits
          </h1>
        </div>
        <h2 className="mb-5 text-3xl font-bold font-serif sm:text-[40px]/[48px]">
          Unlock the Potential of Your Business with These Benefits
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 mt-10 cursor-pointer md:grid-cols-3 md:gap-4 lg:gap-6">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="grid rounded-md group hover:border-[#006CB7] border-s-4 border transition-all duration-500 hover:shadow-xl p-8 md:p-10"
            data-aos={benefit.aos}
            data-aos-duration="2000"
          >
            <div className="group-hover:translate-x-32 transition-all ease-linear duration-300 mb-5">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-[#006CB7] mb-3">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-500 text-balance">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

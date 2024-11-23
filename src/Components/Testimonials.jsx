import { useState, useEffect } from "react";
import { apiRequest } from "./Api";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import star from "../assets/star.svg";

const Testimonials = () => {
  const [testimonialsData, setTestimonialData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = () => {
    apiRequest("get", "testimonials")
      .then((data) => {
        setTestimonialData(data);
      })
      .catch((error) => {
        console.log("Failed to fetch testimonials", error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonialsData.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonialInfo = testimonialsData[currentIndex];
  return (
    <section className="group py-16">
      <div className="mx-auto flex flex-col px-5 pb-20 sm:gap-y-20 md:px-10 relative">
        <div className="flex items-center justify-center flex-col gap-6">
          <h2
            className="text-3xl font-bold font-serif md:text-5xl"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Testimonials
          </h2>
          <div className="lg:w-0 w-40 lg:group-hover:w-40 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
        </div>
        {testimonialInfo ? (
          <div className="p-6 text-center justify-center">
            <div className="flex mb-8 justify-center">
              {[...Array(testimonialInfo.rating)].map((_, i) => (
                <img
                  key={i}
                  src={star}
                  alt="star"
                  className="mr-3 inline-block w-4 flex-none"
                />
              ))}
            </div>
            <p className="mb-4 px-10 max-w-xl text-center mx-auto">
              {testimonialInfo.content}
            </p>
            <img
              className="w-16 h-16 rounded-full object-cover mx-auto mt-8"
              alt="author"
              src={`http://localhost:3000/Images/${testimonialInfo.image}`}
            />
            <p className="font-semibold text-lg mt-3">{testimonialInfo.name}</p>
            <p className="text-sm text-gray-500">{testimonialInfo.role}</p>
          </div>
        ) : (
          <div className="text-center">Loading testimonials...</div>
        )}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 left-5"
        >
          <BsArrowLeftCircle className="text-4xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-5"
        >
          <BsArrowRightCircle className="text-4xl" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

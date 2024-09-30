import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    text: "Dignissim ullamcorper eu urna enim gravida sodales. Sceleisque orci semper vulputate nisi, laoreet scelerisque purus.",
    author: "David James",
    role: "CEO/Chairman",
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
    author: "Sarah Miller",
    role: "Marketing Head",
    rating: 5,
  },
  {
    text: "Suspendisse potenti. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae.",
    author: "John Doe",
    role: "CTO",
    rating: 3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]);

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
    <section>
      <div className="mx-auto flex flex-col gap-y-16 px-5 pb-20 sm:gap-y-20 md:px-10 relative">
      <div className="flex items-center justify-center flex-col gap-6">
              <h2 className="text-3xl font-bold md:text-5xl">Testimonials</h2>
              <div className=" w-[160px] h-[5px] bg-[#ff7222] rounded"></div>
            </div>
        <div className="p-6 text-center justify-center">
          <div className="flex mb-8 justify-center">
            {[...Array(testimonialInfo.rating)].map((_, i) => (
              <img
                key={i}
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt="star"
                className="mr-3 inline-block w-4 flex-none"
              />
            ))}
          </div>
          <p className="mb-4 px-10 max-w-xl text-center mx-auto">
            {testimonialInfo.text}
          </p>

          <img
            className="w-16 h-16 rounded-full object-cover mx-auto mt-8"
            alt="author"
            src="https://i.pinimg.com/564x/dc/89/25/dc892582e8c26c2994864ae56d9285df.jpg"
          />

          <p className="font-semibold text-lg mt-3">{testimonialInfo.author}</p>
          <p className="text-sm text-gray-500">{testimonialInfo.role}</p>
        </div>

        {/* Left navigation button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 md:left-5"
        >
          <svg
            width="72"
            height="73"
            viewBox="0 0 72 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="71"
              height="71"
              rx="35.5"
              stroke="#E2E2E2"
            />
            <g clipPath="url(#clip0_3799_19567)">
              <path
                d="M44 35.5H31.83L37.42 29.91L36 28.5L28 36.5L36 44.5L37.41 43.09L31.83 37.5H44V35.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_3799_19567">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24 24.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Right navigation button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 md:right-5"
        >
          <svg
            width="72"
            height="73"
            viewBox="0 0 72 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="71"
              height="71"
              rx="35.5"
              stroke="#E2E2E2"
            />
            <g clipPath="url(#clip0_3799_19610)">
              <path
                d="M36 28.5L34.59 29.91L40.17 35.5H28V37.5H40.17L34.59 43.09L36 44.5L44 36.5L36 28.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_3799_19610)">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24 24.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

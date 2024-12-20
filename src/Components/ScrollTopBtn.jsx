import { useEffect, useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

const ScrollToTopButton = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Update scroll percentage as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-main-color bg-white flex items-center justify-center shadow-lg relative"
      >
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
          <circle
            className="text-[#006CB7]"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={`${100 - scrollPercentage}`}
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
        </svg>
        <TiArrowForwardOutline className="text-2xl text-[#006CB7] -rotate-90"/></button>
    </div>
  );
};

export default ScrollToTopButton;

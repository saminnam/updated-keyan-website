import { useState, useEffect } from "react";
import logoblack from "../assets/keyan1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`sticky top-0 z-50 bg-white text-black transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 bg-transparent">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-4">
          <a href="/">
            <img src={logoblack} alt="" className="w-[170px]" />
          </a>
          <div className="hidden lg:flex lg:flex-row lg:space-x-6">
            <Link
              to={"/"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              ABOUT
            </Link>
            <Link
              to={"/services"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              SERVICES
            </Link>
            <Link
              to={"/portfolios"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              PORTFOLIO
            </Link>
            <Link
              to={"/blogs"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              BLOG
            </Link>
            <Link
              to={"/contact"}
              className="font-inter font-medium active:text-[#006CB7] rounded-lg px-3 hover:text-[#006CB7]"
            >
              CONTACT
            </Link>
          </div>
          {/* Mobile menu toggle */}
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            className={`lg:hidden flex flex-col items-center justify-center text-black gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Link
              to={"/"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              ABOUT
            </Link>
            <Link
              to={"/services"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              SERVICES
            </Link>
            <Link
              to={"/portfolios"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              PORTFOLIO
            </Link>
            <Link
              to={"/blogs"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              BLOG
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-inter px-4 py-2 hover:text-[#006CB7]"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;

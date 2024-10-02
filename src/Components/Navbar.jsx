import React, { useState, useEffect } from 'react';
import logoblack from '../assets/keyan.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`sticky top-0 z-50 bg-white text-black transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 bg-transparent">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-4">
          <a href="#">
            <img src={logoblack} alt="" className="w-[150px]" />
          </a>
          <div className="hidden lg:flex lg:flex-row lg:space-x-6">
            <a href="/" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              HOME
            </a>
            <a href="/about" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              ABOUT
            </a>
            <a href="/services" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              SERVICES
            </a>
            <a href="/portfolios" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              PORTFOLIO
            </a>
            <a href="/blogs" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              BLOG
            </a>
            <a href="/contact" className="font-inter font-medium active:text-[#ff7222] rounded-lg px-3 py-4 hover:text-[#ff7222]">
              CONTACT
            </a>
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
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              HOME
            </a>
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              ABOUT
            </a>
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              SERVICES
            </a>
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              PORTFOLIO
            </a>
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              BLOG
            </a>
            <a href="#" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
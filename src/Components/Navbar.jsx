import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import logoblack from '../assets/keyan.png';
import logowhite from '../assets/keyan-white.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`${
        isScrolled ? 'fixed bg-white shadow-md text-black' : 'absolute bg-transparent text-white'
      } inset-x-0 top-0 z-50 transition-all ease-linear`}
    >
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 bg-transparent">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-4">
          <Link href="/">
            {isScrolled ? (
              <img src={logoblack} alt="Logo" className="w-[150px]" />
            ) : (
              <img src={logowhite} alt="Logo" className="w-[150px]" />
            )}
          </Link>
          <div className="hidden lg:flex lg:flex-row lg:space-x-6">
            <Link href="/" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]">
              HOME
            </Link>
            <Link href="/about" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]" onClick={() => setIsScrolled(true)}>
              ABOUT
            </Link>
            <Link href="/services" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]">
              SERVICES
            </Link>
            <Link href="/portfolios" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]">
              PORTFOLIO
            </Link>
            <Link href="/blogs" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]">
              BLOG
            </Link>
            <Link href="/contact" className="font-inter rounded-lg px-3 font-medium py-4 hover:text-[#ff7222]">
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

          {/* Mobile menu */}
          <div
            className={`lg:hidden flex flex-col items-center justify-center text-black gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <Link href="/" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              HOME
            </Link>
            <Link href="/about" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              ABOUT
            </Link>
            <Link href="/services" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              SERVICES
            </Link>
            <Link href="/portfolios" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              PORTFOLIO
            </Link>
            <Link href="/blogs" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              BLOG
            </Link>
            <Link href="/login" className="font-inter px-4 py-2 hover:text-[#ff7222]">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize (if desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${isScrolled ? "h-14" : "h-24"
        } flex items-center`}
    >
      <nav
        className={`container mx-auto flex items-center justify-between h-full transition-all duration-300 ${isScrolled ? "border-b border-gray-300" : "border-none"
          } items-center px-4`}
      >
        <div className={`text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 flex items-center ${isScrolled ? "py-2" : "py-4"}`}>
          RAVISH
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-x-6 text-gray-700 font-medium items-center">
          <a href="#home" className="pb-2 hover:text-black border-b-2 border-transparent hover:border-gray-700 transition-all duration-300">
            Home
          </a>
          <a href="#about" className="pb-2 border-b-2 border-transparent hover:border-gray-700 hover:text-black transition-all duration-300">
            About
          </a>
          <a href="#skills" className="pb-2 border-b-2 border-transparent hover:border-gray-700 hover:text-black transition-all duration-300">
            Skills
          </a>
          <a href="#projects" className="pb-2 border-b-2 border-transparent hover:border-gray-700 hover:text-black transition-all duration-300">
            Projects
          </a>
          <a href="#contact" className="pb-2 border-b-2 border-transparent hover:border-gray-700 hover:text-black transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile menu dropdown (slide from right) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg md:hidden flex flex-col items-center pt-24 z-50 transition-transform duration-300 px-6 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close icon */}
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-black focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#home" className="w-full text-center py-4 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="w-full text-center py-4 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="w-full text-center py-4 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="w-full text-center py-4 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="w-full text-center py-4 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Contact</a>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/ravish-jain-5840712b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.285c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.285h-3v-5.5c0-1.237-.013-2.823-1.75-2.823-1.75 0-2.02 1.37-2.02 2.723v5.6h-3v-10h2.88v1.36h.041c.401-.76 1.379-1.56 2.84-1.56 3.04 0 3.609 2 3.609 4.591v5.609z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM12 6a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6zm0 2a4 4 0 100 8 4 4 0 000-8zm5.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V15.47h-2.54v-2.47h2.54v-1.84c0-2.507 1.492-3.89 3.773-3.89 1.094 0 2.24.196 2.24.196v2.461h-1.263c-1.244 0-1.63.775-1.63 1.57v1.5h2.773l-.443 2.47h-2.33v6.409C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://github.com/ravishjain06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              {/* GitHub */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.091-.745.083-.73.083-.73 1.206.085 1.841 1.239 1.841 1.239 1.07 1.835 2.809 1.304 3.495.998.108-.776.42-1.304.763-1.604-2.665-.302-5.467-1.333-5.467-5.93 0-1.312.469-2.383 1.235-3.222-.124-.303-.535-1.52.117-3.167 0 0 1.008-.322 3.301 1.23a11.501 11.501 0 013.002-.404c1.018.005 2.041.138 3.002.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.647.242 2.864.118 3.167.767.839 1.234 1.91 1.234 3.222 0 4.609-2.806 5.625-5.479 5.921.431.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.289 0 .32.192.693.799.576C20.565 22.093 24 17.595 24 12.297c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

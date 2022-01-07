import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="title-font font-medium text-white mb-4 md:mb-0 text-xl">
            Ben Margerison
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center mb-4 md:mb-0">
          <a href="/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <nav className="md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/bmargerison">
            <img
              className="mr-4 hover:text-white w-7 h-7"
              src={require('./images/github.png')}
              />
          </a>
          <a href="https://www.linkedin.com/in/margerisonb/">
            <img
              className="hover:text-white w-7 h-7"
              src={require('./images/linkedin.png')}
            />
          </a>
        </nav>
        </div>
    </header>
  );
}
import React from "react";

export default function Myintro() {
  return (
    <section id="intro">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ben,
            <br className="hidden lg:inline-block" /> a junior developer
          </h1>
          <p className="mb-4 leading-relaxed">
            I have recently made a career switch from accounting to software 
            engineering. I was driven to do this as I am looking to combine my 
            interests and values with my day-to-day work: collaboration, solving 
            problems, and continually learning and improving. 
          </p>
          <p className="mb-8 leading-relaxed">
            I have made this website in order to share a little bit about me as 
            a person, and summarise some of the things I've been working on.
          </p>
          <div className="flex justify-center">
            <a
              href="/about"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              More about me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require('./images/me.png')}
          />
        </div>
      </div>
  </section>
  );
}
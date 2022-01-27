import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { FaGithub } from 'react-icons/fa';
import { DiDjango, DiReact, DiPython, DiRuby } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';
import { GiCapybara } from 'react-icons/gi';
import { IconContext } from "react-icons";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Things I've worked on
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A mixture of group and individual projects, with a variety of 
            different tech. Please see my Github for what I am currently working 
            on.
          </p>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="flex relative">
              <div className="px-8 py-10 relative w-1/2 border-4 border-gray-800 bg-gray-900 mr-2 mb-10 grid place-items-center">
                <h1 className="title-font text-lg font-medium text-white mb-5">
                  paw2door
                </h1>
                <a href="https://github.com/bmargerison/paw2door">
                  <FaGithub className="mb-5" size={30}/>
                </a>
                <p className="leading-relaxed mb-5">Working as a team of 4, the goal of this project was to create an aggregator for pet rescues to make it easier for people to adopt a pet.</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconContext.Provider value={{ color: '#4ADE80', size: '50px' }}>
                    <DiDjango size={50}/>
                    <DiReact size={50}/>
                  </IconContext.Provider>
                </div>
              </div>
              <img
                alt="gallery"
                className="w-1/2 mb-10"
                src={require('./images/paw2door.gif')}
              />
            </div>

            <div className="flex relative">
              <img
                alt="gallery"
                className="w-1/2 mb-10 mr-2"
                src={require('./images/acebook.gif')}
              />
              <div className="px-8 py-10 relative w-1/2 border-4 border-gray-800 bg-gray-900 mr-2 mb-10 grid place-items-center">
                <h1 className="title-font text-lg font-medium text-white mb-5">
                  Acebook
                </h1>
                <a href="https://github.com/bmargerison/Acebook">
                  <FaGithub className="mb-5" size={30}/>
                </a>
                <p className="leading-relaxed mb-5">Working in a team of 7, during weeks 8 and 9 of the Makers Academy course the task was to recreate many elements of a social media site such as Facebook.</p>
                <div className="grid grid-cols-4 gap-4">
                  <IconContext.Provider value={{ color: '#4ADE80', size: '50px' }}>
                    <SiRubyonrails size={50}/>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 my-5">
                      RSpec
                    </h2>
                    <GiCapybara size={50}/>
                    <DiReact size={50}/>
                  </IconContext.Provider>
                </div>
              </div>
            </div>

            <div className="flex relative">
              <div className="px-8 py-10 relative w-1/2 border-4 border-gray-800 bg-gray-900 mr-2 mb-10 grid place-items-center">
                <h1 className="title-font text-lg font-medium text-white mb-5">
                  CLI bowling
                </h1>
                <a href="https://github.com/bmargerison/bowling-challenge-ruby">
                  <FaGithub className="mb-5" size={30}/>
                </a>
                <p className="leading-relaxed mb-5">This repo allows the user to play a game of bowling in the CLI by entering the number of pins for each roll, which is deceptively tricky to implement.</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconContext.Provider value={{ color: '#4ADE80', size: '50px' }}>
                    <DiRuby size={50}/>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 my-5">
                      RSpec
                    </h2>
                  </IconContext.Provider>
                </div>
              </div>
              <img
                alt="gallery"
                className="w-1/2 mb-10"
                src={require('./images/bowling.gif')}
              />
            </div>

            <div className="flex relative">
              <img
                alt="gallery"
                className="w-1/2 mb-10 mr-2"
                src={require('./images/acebook.gif')}
              />
              <div className="px-8 py-10 relative w-1/2 border-4 border-gray-800 bg-gray-900 mr-2 mb-10 grid place-items-center">
                <h1 className="title-font text-lg font-medium text-white mb-5">
                  Bank Tech Test
                </h1>
                <a href="https://github.com/bmargerison/bank-tech-test">
                  <FaGithub className="mb-5" size={30}/>
                </a>
                <p className="leading-relaxed mb-5">An example tech test using test-driven development; building a simple backend that allows depositing money, withdrawing money and viewing a statement of transactions.</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconContext.Provider value={{ color: '#4ADE80', size: '50px' }}>
                    <DiPython size={50}/>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 my-5">
                      Pytest
                    </h2>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
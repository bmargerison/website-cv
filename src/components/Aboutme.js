import React from "react";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <section id="outdoors">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Interest
            </h1>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
            />
          </div>
        </div>
      </section>
      <section id="running">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Interest
            </h1>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
          </div>
        </div>
      </section>
      <section id="gaming">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Interest
            </h1>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
            />
          </div>
        </div>
      </section>
      <section id="music">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center"
              alt="picture"
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Interest
            </h1>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <div className="text-center">
        <QuestionMarkCircleIcon className="w-10 inline-block mb-1  py-6" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          About me
        </h1>
      </div>
      <section id="outdoors">
        <div className="container mx-auto px-10 py-5 md:flex-row items-center relative flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <p className="mb-4 leading-relaxed">
              I don't have a middle name, and it's just Ben and not Benjamin. It 
              rolls right off the tongue, I know... I am from Hull and originally
              trained as an accountant in London before later pursuing my actual 
              passion in coding, made possible by becoming more comfortable with 
              with uncertainty and the idea of not knowing. I moved to Cardiff a 
              couple of years ago, where I live with my partner and rescue kitty, Pepper. 
            </p>
            <p className="mb-4 leading-relaxed">
              The things that drive me forward and motivate me are curiosity, a 
              desire to learn and to solve challenging problems, although I also 
              find the time to switch off. As well as an introverted nature, I 
              am also excited by learning, developing and collaborating with others.
            </p>
            <p className="mb-1 leading-relaxed">
              Favourite food: ribs (I'm working on it)
            </p>
            <p className="mb-1 leading-relaxed">
              Favourite butter: peanut
            </p>
            <p className="mb-1 leading-relaxed">
              Favourite non-alcoholic beverage: tea
            </p>
            <p className="mb-1 leading-relaxed">
              Favourite alcoholic beverage: wheat beer
            </p>
            <p className="mb-1 leading-relaxed">
              RGB or no RGB: RGB
            </p>
            <p className="mb-1 leading-relaxed">
              Here are some pictures and little about my interests. I hope its 
              at least mildly pleasant :)
            </p>
          </div>
        </div>
      </section>
      <section id="more-images">
        <div className="container mx-auto px-10 mb-10">
          <div className="container grid grid-cols-4 gap-4">
              <img
                className=""
                alt="picture"
                src={require('./images/tins.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/the shining.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/grass.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/cat on comp.jpg')}
              />
          </div>
        </div>
      </section>
      <section id="outdoors">
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              The outdoors
            </h1>
            <p className="mb-4 leading-relaxed">
              If the weather is good I am more often than not trying to get 
              outdoors in some way. There is a growing body of research 
              suggesting that swimming in the sea and sitting near trees reduces 
              stress and improves mood... or maybe this is just a cover up for 
              my true passion of sitting in a field, deprived of sleep and 
              eating from tins.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
              src={require('./images/camping.jpg')}
            />
          </div>
        </div>
      </section>
      <section id="running">
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
              src={require('./images/running.jpg')}
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Running
            </h1>
            <p className="mb-4 leading-relaxed">
              I took up running two to three years ago, and have had modest 
              improvements and achievements, with a preference for half marathon 
              distance. I plan for my main race this year to be either 
              the Great North Run or the Hull half marathon, and when my pace 
              picks up a little more also hope to run a somewhat competitive 
              marathon. I'm in the process of trying to change my strike, and 
              considering the need for a running coach, and joining a running 
              club. You can see my adventures <a style={{ textDecoration: 'underline' }} href="https://www.strava.com/athletes/59805862">here.</a>
            </p>
          </div>
        </div>
      </section>
      <section id="music">
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Music
            </h1>
            <p className="mb-4 leading-relaxed">
              My passion began during my angsty teenage years with an obsession 
              anything guitar-related. I was involved with tutoring beginners 
              during this period, but despite what my mum thinks I am not going 
              to be the next Slash, so coding it is... My taste has since become 
              much more varied, but I still enjoy picking up an instrument, 
              exploring music and finding the right soundtrack.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
              src={require('./images/music.jpg')}
            />
          </div>
        </div>
      </section>
      <section id="gaming">
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center mb-5"
              alt="picture"
              src={require('./images/rl.jpeg')}
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Gaming
            </h1>
            <p className="mb-4 leading-relaxed">
              I recently built a PC for the purposes of a coding course and for my 
              personal and potentially professional coding projects. You can 
              imagine my surprise when it also turned out it could play some 
              games too! I enjoy the odd single player title and also online 
              multiplayer, with a particular penchant for Rocket League. Playing 
              this game demonstrates the remarkable ability to face adversity in 
              the form of being destroyed by kids who have only been playing the 
              game for a couple of weeks.
            </p>
          </div>
        </div>
      </section>
      <section id="sports">
      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center relative flex flex-grow">
        <div className="grid grid-cols-2">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Dancing
            </h1>
            <p className="mb-4 leading-relaxed">
              Despite a rigid, wooden frame I am taking weekly dance 
              classes to learn the Cha-Cha-Cha and the Waltz. 
            </p>
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Sports
            </h1>
            <p className="mb-4 leading-relaxed">
              I enjoy the odd game of 5-a-side and snooker, and watching mainly 
              football, rugby, snooker and F1 (until Abu Dhabi 2021 at least).
            </p>
          </div>
        </div>
      </div>
      </section>
      <section id="even-more-images">
        <div className="container mx-auto px-10 mb-10 my-10">
          <div className="container grid grid-cols-3 gap-4">
              <img
                className=""
                alt="picture"
                src={require('./images/paddleboard.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/me and cat.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/a pepper christmas.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/bethan and pepper.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/the mist.jpg')}
              />
              <img
                className="object-cover object-center rounded"
                alt="picture"
                src={require('./images/climbing.jpg')}
              />
          </div>
        </div>
      </section>
    </section>
  );
}
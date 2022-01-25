import React from "react";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <section id="outdoors">
        <div className="container mx-auto px-10 py-10 md:flex-row items-center relative flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <p className="mb-4 leading-relaxed">
              I don't have a middle name, and it's just Ben and not Benjamin. It 
              rolls right off the tongue, I know... I am originally from Hull and 
              trained as an accountant in London. I moved to Cardiff a couple of 
              years ago, where I live with my partner and rescue kitty, Pepper. 
              The things that drive me forward and motivate me are curiosity, a 
              desire to learn and to solve problems, although I also find the time 
              to switch off. As well as an introverted nature, I am also excited by 
              learning, developing and collaborating with others.
            </p>
            <p className="mb-1 leading-relaxed">
              Favourite food: ribs
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
      <section id="outdoors">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
              src={require('./images/tins.jpg')}
              style={{
                height: "75%",
                width: "75%"
              }}
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
              src={require('./images/running.jpg')}
              style={{
                height: "75%",
                width: "75%"
              }}
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
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
              club. You can see my adventures here: https://www.strava.com/athletes/59805862
            </p>
          </div>
        </div>
      </section>
      <section id="music">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Music
            </h1>
            <p className="mb-4 leading-relaxed">
              My passion began during my angsty teenage years with an obsession 
              anything guitar-related. I was involved with tutoring beginners 
              during this period, but despite what my mum thinks I am not going 
              to be the next Slash, so coding it is... My taste has since become 
              much more varied, but I still enjoy picking up an instrument, 
              exploring music and finding the soundtrack for the moment.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="picture"
              src={require('./images/music.jpg')}
              style={{
                height: "50%",
                width: "50%"
              }}
            />
          </div>
        </div>
      </section>
      <section id="gaming">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center"
              alt="picture"
              src={require('./images/rl.jpeg')}
            />
          </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Gaming
            </h1>
            <p className="mb-4 leading-relaxed">
              I recently built a PC for the purposes of my course and for my 
              personal and potentially professional coding projects. It has the 
              (not so) accidental bonus of being able to play some games. I 
              enjoy the odd single player title and also online multiplayer, 
              with a particular penchant for Rocket League. Playing this game 
              demonstrates the remarkable ability to face adversity in the form 
              of being destroyed by kids who have only been playing the game for 
              a couple of weeks.
            </p>
          </div>
        </div>
      </section>
      <section id="sports">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative flex flex-grow">
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Dancing
            </h1>
            <p className="mb-4 leading-relaxed">
              My rigid, wooden frame won't stop me from taking weekly dance 
              classes to learn the Cha-Cha-Cha and the Waltz. 
            </p>
          </div>
        </div>
          <div className="lg:flex-grow md:w-0.75 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              Sports
            </h1>
            <p className="mb-4 leading-relaxed">
              I enjoy the odd game of 5-a-side and snooker, and watching mainly 
              football, rugby, snooker and F1 (until Abu Dhabi 2021 at least).
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
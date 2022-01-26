import paw2door from './components/images/paw2door.gif'
import banktechtest from './components/images/banktechtest.jpg'
import bowling from './components/images/bowling.gif'
import acebook from './components/images/acebook.gif'

export const projects = [
  {
    title: "paw2door",
    subtitle: "Django + React",
    description:
      "Working as a team of 4, the goal of this project was to create an aggregator for pet rescues to make it easier for people to adopt a pet. ",
    image: paw2door,
    link: "https://github.com/bmargerison/paw2door",
  },
  {
    title: "bowling-CLI",
    subtitle: "Ruby",
    description:
      "This repo allows the user to play a game of bowling in the CLI by entering the number of pins for each roll.",
    image: bowling,
    link: "https://github.com/bmargerison/bowling-challenge-ruby",
  },
  {
    title: "Acebook",
    subtitle: "Rails (testing with Rspec and Capybara)",
    description:
      "Working in a team of 7, during weeks 8 and 9 of the Makers Academy course the task was to recreate many elements of a social media site such as Facebook.",
    image: acebook,
    link: "https://github.com/bmargerison/Acebook",
  },
  {
    title: "bank-tech-test",
    subtitle: "Python (testing with Pytest)",
    description:
      "An example tech test; building a simple backend that allows depositing money, withdrawing money and viewing a statement of transactions.",
    image: banktechtest,
    link: "https://github.com/bmargerison/bank-tech-test",
  },
];

export const skills = [
  "Linux",
  "JavaScript",
  "React",
  "Node",
  "Python",
  "Django",
  "Ruby",
  "Rails",
];
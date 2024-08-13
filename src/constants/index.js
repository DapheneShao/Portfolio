import { a } from "@react-spring/three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amazon,
  gmg,
  usf,
  bank,
  fastApi,
  Python,
  GPT3,
  bryanShaffer,
  olga,
  wei,
  OpenAI,
  tank,
  YouTube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "FastAPI",
    icon: fastApi,
  },
  {
    name: "Python",
    icon: Python,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "March 2023 - Sep 2023",
    points: [
      "Developed and API that can create virtual machines on all cloud providers",
      "Created the design for the API using Figma",
      "Created the frontend for the API using ReactJS",
    ],
  },
  {
    title: "Fellowship",
    company_name: "Girl makes Game",
    icon: gmg,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: [
      "Developed games on Unity",
      "Lead a team of 3 people to create a game",
      "Then helped students build the game in their summer camp of 2022",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of San Francisco",
    icon: usf,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2023",
    points: [
      "Graded assignments",
      "Helped students in their assignments",
      "Helped the professor with the course",
      "Created assignments for the students",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am confident that Anshaj will be able to succeed with his computer science major. He has the skill and drive that are optimal for any academic pursuits.He has the qualities that an educator looks for in all of their students, and I cannot recommend him enough.",
    name: "Brayan shaffer",
    designation: "Professor",
    company: "University of Massachusetts",
    image: bryanShaffer,
  },
  {
    testimonial:
      "Great student, very hard working and dedicated. I will recomend him for Tapai confrence and future opportunities.",
    name: "Olga Karpenko",
    designation: "Professor",
    company: "University of San Francisco",
    image: olga,
  },
  {
    testimonial:
      "Anshaj is avery good devlopment engineer. he has a good sense of ownership and can get projects done on time.",
    name: "Wei Zhang",
    designation: "Software Development Engineer",
    company: "Amazon",
    image: wei,
  },
];

const projects = [
  {
    name: "Modern Bank App",
    description:
      "All device compatible banking application that allows users to view their account balances and transfer money between accounts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/AnshajVats/hoboBank",
    live_link: "https://anshajvats.github.io/hoboBank",
  },
  {
    name: "GPT-3",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: GPT3,
    source_code_link: "https://github.com/AnshajVats/GPT3-Webpage",
    live_link: "https://anshajvats.github.io/GPT3-Webpage/",
  },
  {
    name: "Dall-E",
    description:
      "Innovative Image Generation with Bing Api hosted on Azure server. This project is inspired by OpenAI's Dall-E.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "FullStack",
        color: "pink-text-gradient",
      },

      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: OpenAI,
    source_code_link: "https://github.com/AnshajVats/dall-e-",
    live_link: "https://anshajvats.github.io/Dall-E-FrontEnd/",
  },
  {
    name: "Tank Game",
    description:
      "A 2D tank game created using java. The game is a multiplayer game where players can play against each other.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Game Development",
        color: "green-text-gradient",
      },
    ],
    image: tank,
    source_code_link: "https://github.com/AnshajVats/tank-game",
    live_link: "https://github.com/AnshajVats/tank-game",
  },
  {
    name: "YouTube Clone",
    description:
      "A clone of YouTube created using Express, Mysql, javaScript. The application allows users to search for videos and watch them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: YouTube,
    source_code_link:
      "https://github.com/AnshajVats/Youtube-Clone-FullStack-website",
  },
];

export { services, technologies, experiences, testimonials, projects };

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
    title: "React Developer",
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
    title: "Real-Time Collaborative Chat Platform",
    company_name: "React, Node.js, MongoDB, Socket.io",
    icon: amazon,
    iconBg: "#383E56",
    date: "May. 2024 - July. 2024",
    points: [
      "Led a 5 members team to implement real-time chat functionality, facilitating regular meetings to address challenges and ensuring seamless integration, resulting in a 95% user satisfaction rate.",
      "Implemented a registration and login system using Node.js and MongoDB in this full-stack application, ensuring secure authentication with Passport.js, reducing unauthorized access attempts by 38%.",
      "Developed real-time chat functionality with React and Socket.io, utilizing REST API for seamless communication and data exchange, enabling dynamic updates of chat messages without page refreshes and achieved a 95% user satisfaction rate for real-time interactions.",
      "Integrated chat message storage using MongoDB Atlas, enabling scalable and reliable cloud-based access to historical messages, resulting in a 100% message retention rate and improving user retention by 31%."
    ],
  },
  {
    title: "Intelligent Financial Maturity Systems",
    company_name: "HTML/CSS, JavaScript, Spring Boot, MySQL",
    icon: gmg,
    iconBg: "#383E56",
    date: "Jan. 2024 - Jun. 2024",
    points: [
      "Established a front-end component library, used Git for version management, and built component documents to facilitate maintenance, reducing front-end development time by 32% and decreasing the code volume by 47%.",
      "Handled various requests from the front end, including expert model processing and enterprise personnel evaluation employing the Spring Boot framework and complex SQL queries for data analysis.",
      "Set up a MySQL database to store more than 200 expert models and maturity evaluation results.",
    ],
  },
  {
    title: "Atmospheric Pollution Monitoring Platform",
    company_name: "Zhejiang Tongxing Technology CO., LTD (Software Engineer Intern)",
    icon: usf,
    iconBg: "#383E56",
    date: "Jul. 2023 - Sep. 2023",
    points: [
      "Optimized the construction site pop-up window by implementing lazy loading, resulting in a 21% reduction in homepage resource usage and eliminating instances of blank pages.",
      "Second-encapsulated the button component of element-react with debounce function to implement the button’s anti-repeated click function, making user operations smoother by 23% and increasing satisfaction by 15%.",
      "Integrated Mapbox maps via Mapbox GL JS, optimizing map configurations, reducing map load times by 18%.",
      "Spearheaded discussions and coordinated with colleagues to enhance data visualization through customizing map styles and adjusting data sources, improving clarity by 27%.",
    ],
  },
  {
    title: "Elderly Health Monitoring Platform",
    company_name: "Zhejiang Zhengyuan Intelligent Technology CO., LTD (Software Engineer Intern)",
    icon: usf,
    iconBg: "#383E56",
    date: "Mar. 2023 - Jun. 2023",
    points: [
      "Maintained Vue.js interface to display vital signs data including heart rate, blood pressure, and oxygen levels.",
      "Enhanced the usability of visualization graphics in ECharts by adjusting font size and adding visual icons, leading to a 26% increase in usability for elderly users, improving overall UX.",
      "Encapsulated Hikvision camera plugin as a reusable Vue.js component, cutting code load by 32%.",
      "Streamlined deployment using Git/GitHub and CI/CD pipelines with GitHub Actions, deploying to Render, cutting deployment time by 45% and reducing update downtime by 31%.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I am confident that Zhuojun Shao will be able to succeed with his computer science major. He has the skill and drive that are optimal for any academic pursuits.He has the qualities that an educator looks for in all of their students, and I cannot recommend him enough.",
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
      "Zhuojun Shao is avery good devlopment engineer. he has a good sense of ownership and can get projects done on time.",
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
    source_code_link: "https://github.com/Zhuojun ShaoVats/hoboBank",
    live_link: "https://Zhuojun Shaovats.github.io/hoboBank",
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
    source_code_link: "https://github.com/Zhuojun ShaoVats/GPT3-Webpage",
    live_link: "https://Zhuojun Shaovats.github.io/GPT3-Webpage/",
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
    source_code_link: "https://github.com/Zhuojun ShaoVats/dall-e-",
    live_link: "https://Zhuojun Shaovats.github.io/Dall-E-FrontEnd/",
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
    source_code_link: "https://github.com/Zhuojun ShaoVats/tank-game",
    live_link: "https://github.com/Zhuojun ShaoVats/tank-game",
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
      "https://github.com/Zhuojun ShaoVats/Youtube-Clone-FullStack-website",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  astro,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ReactPortfolio,
  gbs,
  astroPortfolio,
  tictactoe,
  threejs,
  zait,
  next,
  logo,
  aceros,
  mktgenial,
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

export const services = [
  { title: "Node.js", icon: nodejs },
  { title: "Git", icon: git },
  { title: "React", icon: reactjs },
  { title: "Astro", icon: astro },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Astro", icon: astro },
  { name: "Next JS", icon: next },
];

export const experiences = [
  {
    title: "Web Development",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#2c3e50",
    date: "Nov 2023 - Present",
    points: [
      "Developed  custom  user-centered  websites  (UI/UX),  focusing  on  mobile-first  design  and  SEO  best practices.",
      "Streamlined client workflows by automating repetitive tasks using Zapier, reducing manual effort by 30%",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Marketingenial",
    icon: mktgenial,
    iconBg: "#2c3e50",
    date: "Apr 2023 - Nov 2023",
    points: [
      "Maintained and optimized responsive websites using HTML5, CSS3, and JavaScript ES6+, ensuring cross-browser compatibility.",
      "Integrated Google Analytics to track user behavior and identify areas for improvement in conversion funnels.",
      "Collaborated with UX/UI designers to implement wireframes and prototypes, enhancing user engagement.",
    ],
  },
  {
    title: "Marketing Associate",
    company_name: "Aceros y Materiales Luna",
    icon: aceros,
    iconBg: "#2c3e50",
    date: "Sept 2021 - Feb 2022",
    points: [
      "Led a rebranding initiative that modernized the company’s visual identity.",
      "Revamped the corporate website using WordPress, improving page load speed by 40% and user retention by 18%",
      "Managed email marketing campaigns with Mailchimp.",
    ],
  },
];

export const projects = [
  {
    name: "React Portfolio",
    description:
      "Website to showcase my portfolio and projects built using React, JavaScript Tailwind CSS.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
    ],
    image: ReactPortfolio,
    source_code_link: "https://github.com/Gersombs/react-portfolio",
  },
  {
    name: "Astro Portfolio Website",
    description:
      "A static site generator that uses Astro to build a portfolio website.",
    tags: [
      { name: "Astro", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
    ],
    image: astroPortfolio,
    source_code_link: "https://github.com/Gersombs/portfolio-json",
  },
  {
    name: "GBS Agency",
    description:
      "A website for a fictional agency built using HTML, CSS, SCSS, and JavaScript.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: gbs,
    source_code_link:
      "https://github.com/Gersombs/AgenciaGBS",
  },
  {
    name: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built using HTML, CSS, and JavaScript",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/Gersombs/Tic-Tac-Toe",
  },
  {
    name: "Zait",
    description:
      "A simple landing page with text animation and functional contact form built using HTML, CSS, and JavaScript.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: zait,
    source_code_link: "https://github.com/Gersombs/Zait",
  },
];

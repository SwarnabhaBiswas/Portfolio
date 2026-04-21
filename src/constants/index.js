import {
  mobile,
  backend,
  tesla,
  web,
  starbucks,
  meta,
  shopify,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  aspnet,
  csharp,
  django,
  mysql,
  python,
  nextjs,
  sql,
  github,
  facebook,
  linkedin,
  x,
  resume,
  portfolio1,
  portfolio2,
  portfolio3,
  sap,
  ibm,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Learning",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
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
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "SQl Develeoper",
    icon: sql,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: aspnet,
  },
  {
    name: "CSS 3",
    icon: csharp,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "HTML/CSS and JS",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "I started my development journey by learning the core building blocks of the web — HTML, CSS, and JavaScript. I focused on creating clean, responsive user interfaces, understanding the fundamentals of the DOM, events, and basic scripting.",
      "During this phase, I built several static and interactive pages and began grasping the logic behind client-side development.",
    ],
  },
  {
    title: "Java DSA",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2024",
    points: [
      "To strengthen my problem-solving mindset, I dedicated several months to mastering core Java and Data Structures.",
      "I practiced algorithms regularly, working with arrays, linked lists, trees, recursion, and sorting techniques.",
      "This phase helped me develop logical thinking and a structured approach to coding problems — essential for interviews and writing clean code.",
    ],
  },
  {
    title: "React",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2024 - Nov 2024",
    points: [
      "Once comfortable with the frontend basics, I stepped into React to build dynamic, component-driven UIs.",
      "I learned about props, state, hooks, conditional rendering, lifecycle methods, and routing.",
      "I built multiple projects using React and started experimenting with tools like Framer Motion and Tailwind CSS to create smooth and modern user experiences.",
    ],
  },
  {
    title: "SQL & PostgreSQL",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jan 2025",
    points: [
      "I then focused on learning SQL and PostgreSQL for managing and querying relational databases.",
      "I explored data modeling, relationships (one-to-many, many-to-many), joins, aggregate functions, and built queries for real-world scenarios.",
      "This gave me a solid base for handling structured data in backend applications.",
    ],
  },
  {
    title: "MERN Stack Development",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Jun 2025",
    points: [
      "I started building full stack applications using MongoDB, Express.js, React, and Node.js.",
      "Worked on real world style projects including authentication, API design, state management, and dynamic UI rendering.",
      "Focused on writing clean, modular code and understanding how frontend and backend interact in a complete system.",
    ],
  },
  {
    title: "Advanced Full Stack Projects & Integrations",
    company_name: "",
    icon: backend,
    iconBg: "#383E56",
    date: "Jul 2025 - Dec 2025",
    points: [
      "Built and refined multiple full stack applications including real time systems (Socket.io), AI integrated apps, and multi feature platforms.",
      "Explored deeper backend concepts like real time communication, API optimization, and handling complex state flows.",
      "Started focusing more on edge case handling, debugging, and improving overall application reliability.",
    ],
  },
  {
    title: "Cloud, DevOps & Scalable Systems",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Currently exploring cloud computing and DevOps practices to make applications more scalable and production ready.",
      "Learning CI/CD pipelines, deployment strategies, and system design fundamentals.",
      "Focusing on building efficient, reliable applications with better performance, testing practices, and real-world scalability in mind.",
    ],
  },
];

const projects = [
  {
    name: "Sync",
    description:
      "A collaborative study platform featuring real-time chat and a synchronized Pomodoro timer, enabling users to study together with live interaction using WebSockets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/express",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/SwarnabhaBiswas/Collaborative-Study",
    live_link:"https://collaborative-study.vercel.app/"
  },

  {
    name: "AI Recipe Generator",
    description:
      "An AI-powered web app that generates recipes based on user inputs using Gemini API, integrated with a PERN stack backend for dynamic data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "gemini-api",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/SwarnabhaBiswas/AIRecipeGen",
    live_link: "https://ai-recipe-gen-nu.vercel.app/dashboard"
  },

  {
    name: "Habitly",
    description:
      "A task and habit tracking application with full CRUD functionality, designed to help users manage daily activities with a clean and intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/express",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3,
    source_code_link: "https://github.com/SwarnabhaBiswas/Habitly",
    live_link:"https://habitly7.netlify.app/"
  },
];

export const footerlinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/swarnabha-biswas-a4503730a",
    icon: linkedin,
  },
  {
    name: "Resume",
    link: resume,
    icon: "CV",
  },
  {
    name: "Github",
    link: "https://github.com/SwarnabhaBiswas",
    icon: github,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/swarnabha_biswas_/",
    icon: x,
  },
];

const certificates = [
  {
    name: "SAPS/4 HANA Development",
    company_name: "SAP",
    icon: sap,
    iconBg: "#E6DEDD",
    date: "Feb 2026",
    link: "https://drive.google.com/file/d/1WbtutGI9y2l-ENZKXrFnwwmEPfBwgclJ/view?usp=sharing",
  },
  {
    name: "Journey to Cloud by IBM CLoud",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1GlA0_GgA9j8HzaA_MPkyNhjgygGOGxug/view?usp=sharing",
  },
  {
    name: "Generative AI for Executives",
    company_name: "AWS",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1qXQh2FkcndlT40XRe-XaXvQDE8CaI5BU/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects, certificates };

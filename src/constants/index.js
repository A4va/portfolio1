import {
    front,
    backend,
    react,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    sass,
    prisma,
    python,
    chakraui,
    tuwaiq,
    sdaia,
    taif,
    taskover,
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
      title: "Frontend Developer",
      icon: front,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: react,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "git",
      icon: git,
    },
    {
      name: "sass",
      icon: sass,
    },
    {
      name: "prisma",
      icon: prisma,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "chakra ui",
      icon: chakraui,
    }
  ];
  
  const experiences = [
    {
      title: "Bootcamp Swaher",
      company_name: "Sdaia",
      icon: sdaia,
      iconBg: "#383E56",
      date: "2022",
      brief:"I gained knowledge of the fundamentals of CCTV systems, the operation of cameras, how switches connect them to the network, how to deal with the DNA center, and the advantages of firewalls. I also learned about recording and storage equipment, how data is kept, what a VMS is, and how I may benefit from big data and cloud storage technologies.",
      // points: [
      //   "li1",
      //   "li2",
      //   "li3",
      // ],
    },
    {
      title: "Full stack Developer",
      company_name: "Tuwaiq Academy",
      icon: tuwaiq,
      iconBg: "#E6DEDD",
      date: "2023",
      brief:"Throughout the duration of the bootcamp, I acquired knowledge of Javascript, Typescript, and various tools, frameworks, libraries, and databases, thereby enabling me to excel as a full-stack developer. Additionally, I worked on numerous projects using these technologies, which was a significant stepping stone toward fulfilling the job market demands.",
      // points: [],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Taif",
      description:
        "Taif website is dedicated to serving individuals with autism and their families by offering valuable resources and support. Our ultimate objective is to become the leading resource for those seeking guidance and assistance in their journey of caring for individuals with autism. We strive to help individuals and families identify the most effective methods for addressing the challenges associated with autism. Our mission is to empower individuals with autism and their families by providing them with the necessary knowledge and tools to improve their quality of life.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakra ui",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
      ],
      image: taif,
      source_code_link: "https://github.com/Front-End-Projectt",
    },
    {
      name: "TaskOver",
      description:
        "TaskOver is driven by our passion for integrating gamification into task completion, which we believe can make the process more enjoyable and engaging for everyone involved. Our primary objective is to create a user-friendly platform that enables users to earn rewards for successfully completing tasks, and to foster healthy competition among them through a dynamic leaderboard system. We are committed to harnessing the power of gamification to inspire and motivate individuals to achieve their goals. By making task completion a fun and rewarding experience, we aim to empower users to take control of their lives and accomplish more than they ever thought possible.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "gray-text-gradient",
        },
      ],
      image: taskover,
      source_code_link: "https://github.com/Full-stack-project-TaskOver",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
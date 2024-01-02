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
    cpp,
    csharp,
    express,
    jwt,
    mysql,
    php,
    vite,
    zod,

    yamm,
    tuwaiq,
    sdaia,

    discord,
    kanban,
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
      name: "SASS",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
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
      name: "Vite",
      icon: vite,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Chakra UI",
      icon: chakraui,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "JWT",
      icon: jwt,
    },
    {
      name: "Zod",
      icon: zod,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "PHP",
      icon: php,
    },
  ];
  
  const experiences = [
    {
      title: "Bootcamp Swaher",
      company_name: "SDAIA",
      icon: sdaia,
      iconBg: "#383E56",
      date: "2022",
      brief:"I gained knowledge of the fundamentals of CCTV systems, the operation of cameras, how switches connect them to the network, how to deal with the DNA center, and the advantages of firewalls. I also learned about recording and storage equipment, how data is kept, what a VMS is, and how I may benefit from big data and cloud storage technologies.",
      points: [],
    },
    {
      title: "Full stack Developer",
      company_name: "Tuwaiq Academy",
      icon: tuwaiq,
      iconBg: "#E6DEDD",
      date: "2023",
      brief:"Throughout the duration of the bootcamp, I acquired knowledge of Javascript, Typescript, and various tools, frameworks, libraries, and databases, thereby enabling me to excel as a full-stack developer. Additionally, I worked on numerous projects using these technologies, which was a significant stepping stone toward fulfilling the job market demands.",
      points: [],
    },
    {
      title: "Frontend Developer",
      company_name: "YAMM",
      icon: yamm,
      iconBg: "#E6DEDD",
      date: "2023",
      brief:"",
      points: [
        "Highly skilled and proactive Front-End Developer with a strong track record at Yamm.",
        "Expertise in technologies and frameworks like i18n, styled-components, and react-hook-form.",
        "Actively contribute to the development of web applications, consistently delivering high-quality code.",
        "Collaborate seamlessly with cross-functional teams to achieve project goals.",
        "Currently engaged in an ongoing project to redesign Yamm's website using Next.js, Tailwind CSS, and React Query.",
        "Focus on enhancing performance and improving the user experience.",
        "Proficient in task management using Jira, ensuring organized and efficient workflows.",
        "Maintain effective communication through Slack, fostering seamless collaboration.",
        "Committed to delivering exceptional code quality and continuously expanding technical skills.",
        "Driven to innovate and contribute to the growth of web development."
      ],
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
      name: "Full-stack Discord Clone",
      description:
      "I developed an end-to-end full-stack and real-time Discord clone project. The project includes features such as servers, channels, video calls, audio calls, message editing and deletion, as well as member roles. Key features of the project include real-time messaging using Socket.io, the ability to send attachments as messages, and real-time deletion and editing of messages for all users. I also implemented text, audio, and video call channels, as well as 1:1 conversations and video calls between members. The project includes member management functionalities like kicking and role changes, along with a unique invite link generation system. Additional features include infinite loading for messages, server creation and customization, a beautiful UI with responsive design and light/dark mode options, WebSocket fallback with polling and alerts, ORM using Prisma for database operations, MySQL database hosted on Planetscale, and authentication with Clerk for secure access. This project showcases my skills in full-stack development, real-time communication, UI/UX design, and database management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next js",
          color: "gray-text-gradient",
        },
        {
          name: "prisma",
          color: "gray-text-gradient",
        },
      ],
      image: discord,
      source_code_link: "https://github.com/A4va/discord-clone",
    },
    {
      name: "Kanban Board",
      description:
      "I developed a simple Kanban project using TypeScript, React, Chakra UI, and the React-beautiful-dnd  library. The project aims to provide a user-friendly and intuitive interface for managing tasks using the Kanban methodology. By leveraging TypeScript, I ensured type safety and improved code maintainability. React served as the foundation for building a responsive and dynamic user interface, while Chakra UI provided a set of customizable and accessible UI components. The React-beautiful-dnd library facilitated easy drag-and-drop functionality, allowing users to move tasks between different columns on the Kanban board. Additionally, I utilized local storage to persist the Kanban board state, ensuring that user's task progress is saved even after refreshing the page.",
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
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: kanban,
      source_code_link: "https://github.com/A4va/Kanban-Board",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
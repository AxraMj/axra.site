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
  expressjs,
  python,
  meta,
  starbucks,
  tesla,
  shopify,
  MaskedFace,
  Application,
  Applewebsite,
  Threejs,
  thumnail,
  GSAP,
  bakeryWebsite,
  travo,
  colorpal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "hackathon",
    title: "Hackathon",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frondend Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Mern Stack",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: expressjs,
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
    name: "Three JS",
    icon: Threejs,
  },
  {
    name: "GSAP",
    icon: GSAP,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "GitHub Actions",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
];

const experiences = [
  {
    title: "Master Of Computer Applications",
    company_name: "MCA",
    iconBg: "#383E56",
    date: "Aug 2023 - July 2025",
    points: [
      "School Of Technology And Applied Sciences University in Kottayam, Kerala",
      "CGPA: 8.16/10 (Current)",
    ],
  },
  {
    title: "Bachelor Of Computer Applications",
    company_name: "BCA",
    iconBg: "#E6DEDD",
    date: "June 2019 - May 2022",
    points: ["SREE SABAREESA College in Punchavayal, Kerala", "CGPA: 6.66/10"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Local Bakery Website",
  //   description:
  //     "A modern, responsive website built for a fictional local bakery to showcase its products, services, and customer love. This project was designed to reflect the warm, welcoming nature of a family-owned bakery while offering a clean and functional user experience across devices.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bakeryWebsite,
  //   source_code_link: "https://github.com/AxraMj/Local-Bakery-Website.git",
  //   demo_link: "https://local-bakery-website.vercel.app/"
  // },
  {
    name: "3D IPhone Website",
    description:
      "I built a website that looks like the iPhone 15 pro page from Apple. I used React,Threejs, and GSAP to make, it work smoothly on any device",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: Applewebsite,
    source_code_link: "https://github.com/AxraMj/Apple-website.git",
    demo_link: "https://apple-website-alpha-blond.vercel.app/",
  },
  {
    name: "Travo: Social Media App",
    description:
      "Travo is a full-stack travel social platform designed to connect travelers (Explorers) and content creators (Creators). It allows users to discover destinations, share experiences, and interact socially through posts, guides, and location-based features.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: "/Travo Thumnail.png",
    source_code_link:
      "https://github.com/AxraMj/TRAVEL-AND-EXPLORATION-MOBILE-APP.git",
    demo_link: "",
  },
  {
    name: "OTT Application",
    description:
      "Our OTT application offers seamless streaming of a vast library of movies, TV shows, and exclusive content over the internet. Enjoy high-quality entertainment anytime, anywhere, on various devices—no traditional cable or satellite required.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "StyledComponent",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: Application,
    source_code_link: "https://github.com/AxraMj/my-app.git",
    demo_link: "",
  },
  {
    name: "OTT Streaming Plaform",
    description:
      "Developed an online OTT streaming platform using ReactJS, Firebase, Redux , and styled components.It enables users to stream content, manage subscriptions, and create watchlists, with secure authentication and responsive design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: thumnail,
    source_code_link: "https://github.com/AxraMj/my-project.git",
    demo_link: "https://my-project-dusky-ten.vercel.app/",
  },
  {
    name: "Mask face Detection System",
    description:
      "Developed a Mask Detection System using OpenCV and Python to monitor real-time mask usage, enhancing facial recognition for public safety during the COVID-19 pandemic.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "Haarcascade",
        color: "pink-text-gradient",
      },
    ],
    image: MaskedFace,
    source_code_link: "https://github.com/AxraMj/Machine-Learning-Projects.git",
    demo_link: "",
  },
];

export const hackathons = [
  {
    name: "ColorPal: Adobe Express Add-on",
    description:
      "An Add-On for Adobe Express that helps create beautiful color palettes and gradients. Generate palettes from images and create custom gradients for your designs.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
      {
        name: "Adobe Spectrum Components",
      },
      {
        name: "Adobe Express SDK",
      },
    ],
    image: colorpal,
    github_link: "https://github.com/AxraMj/colorpal.git",
  },
  {
    name: "Travo App: Google Maps Platform Awards",
    description:
      "A full-stack travel social platform that connects travelers and content creators. Features location-based discovery, travel guides, and social interactions using Google Maps Platform.",
    tags: [
      {
        name: "React Native",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Google Maps API",
      },
    ],
    image: travo,
    github_link:
      "https://github.com/AxraMj/TRAVEL-AND-EXPLORATION-MOBILE-APP.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

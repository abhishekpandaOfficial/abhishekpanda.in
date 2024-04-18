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
    meta,
    starbucks,
    tesla,
    shopify,
    virtusa,
    solera,
    wellsfargo,
    conduent,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Full Stack  Developer",
      icon: web,
    },
    {
      title: "Cloud Architect",
      icon: mobile,
    },
    {
      title: "DevOps Architect",
      icon: backend,
    },
    {
      title: "Content Creator & Youtuber",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "Cloud Solution Architect",
      company_name: "Solera",
      icon: solera,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Architecting web application using .NET Core and Spring Boot Microservices with Kafka integration.",
        "Architecting CI/ CD Pipeline implementing DevOps tools like GitHub Action, Argo CD, Prometheus, Grafana, Docker, Kubernetes, and Terraform.",
        "Architecting on Cloud Infrastructure in AWS (EC2, S3, Dynamo DB, SQS, SNS, IAM, Route 53, API Gateway)",
        "Helped the teams to demonstrate and architect some of the key features for better optimization and performance.",
      ],
    },
    {
      title: "Assistant Vice President",
      company_name: "Wells Fargo",
      icon: wellsfargo,
      iconBg: "#E6DEDD",
      date: "June 2020 - July 2022",
      points: [
        "Led a team of 10 engineers in the successful completion of a complex software project, resulting in a 25% increase in efficiency for the client.",
        "Architecting Collaborated with cross-functional teams to identify and resolve technical issues, resulting in a 90% decrease in system downtime and improved customer satisfaction.",
        "Worked on Server less using Azure Functions, Azure Service Bus, Logic Apps Developing web application using .NET Core, MVC, Microservices, Web API Microservices with RabbitMQ, batch job monitoring using Autosys, DataDog as Log Monitoring",
        "Architecting DevSecOps Pipeline using tools like Jenkins, Trivy, Docker, Kubernetes, and Sonarqube.",
        "Architecting cloud Infrastructure for Azure and lift and shift the on-premises model to Azure completely which reduces cost by 30%."
      ],
    },
    {
      title: "Associate Consultant",
      company_name: "Virtusa",
      Client:"Qatar-Airways",
      icon: virtusa,
      iconBg: "#383E56",
      date: "August 2018 - June 2020",
      points: [
        "Developing and maintaining web applications using React.js, C#.Net, .NET Core, Web API, SQL and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Collaborated with senior consultants to design and execute innovative solutions that addressed complex business challenges, resulting in a 30% reduction in operational costs for clients",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Conduent",
      Client:"Bank Of America & Metlife",
      icon: conduent,
      iconBg: "#E6DEDD",
      date: "July 2015 - July 2018",
      points: [
        "Designed and implemented automated testing procedures, which increased testing efficiency by 40% and reduced testing time by 30%.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing application using C#, ASP.NET Core, ADO .NET, SQL, JavaScript.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Conducted code reviews and provided feedback to team members, resulting in a 20% increase in code quality and a 15% decrease in software bugs."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
      name: "Sara Lee",
      designation: "Director",
      company: "Solera",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Full Stack developer who truly cares about their clients' success like Abhishek does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Qatar-Airways",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Bank Of America",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import React from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

const Card = ({ image, title, description, techs, githubLink }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
      <img
        src={image}
        alt="Project Cover"
        className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-125 hover:contrast-125"
      />
      <div className="p-6">
        <h2 className="text-black text-2xl font-bold mb-4 animate__animated animate__fadeInDown">
          {title}
        </h2>
        <p className="text-gray-700 text-base mb-4 leading-relaxed animate__animated animate__fadeIn">
          {description}
        </p>
        <div className="flex gap-3 mb-6 animate__animated animate__fadeIn">
          {techs.map((tech) => (
            <span key={tech.name} className="flex items-center gap-2 py-1 px-3 bg-blue-50 rounded-full text-sm text-blue-700 transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-blue-500/50">
              <FontAwesomeIcon icon={tech.icon} className={`text-${tech.color}`} /> {tech.name}
            </span>
          ))}
        </div>
        <a
          href={githubLink}
          className="inline-block py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-bold uppercase rounded-full tracking-wide transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-blue-500/50 relative overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: "/public/movie site .png",
      title: "Movies Website",
      description: "Developed a movie search website using the OMDb API, allowing users to explore and discover movie details effortlessly.",
      techs: [
        { name: "HTML", icon: faHtml5, color: "#E44D26" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/static-website",
    },
    {
      image: "/public/wheather app.png",
      title: "Weather APP",
      description: "Created a weather application using React and Tailwind CSS, providing users with real-time weather updates and forecasts based on their location.",
      techs: [
        { name: "React", icon: faReact, color: "#61DAFB" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Weather-App",
    },
    {
      image: "/public/to do APP.PNG",
      title: "To Do App",
      description: "Built a dynamic to-do app with React js for efficient task management, featuring a seamless, interactive interface.",
      techs: [
        { name: "React", icon: faReact, color: "#61DAFB" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Weather-App",
    },
    {
      image: "/public/ecomerce .png",
      title: "Ecomerce Store",
      description: "Created an intuitive e-commerce store, optimizing user experience with seamless navigation and secure transactions.",
      techs: [
        { name: "React", icon: faReact, color: "#61DAFB" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Weather-App",
    },
    {
      image: "/public/portfolio website.png",
      title: "Portfolio Website",
      description: "Developed a sleek portfolio website showcasing projects, skills, and experience with a clean, responsive design.",
      techs: [
        { name: "React", icon: faReact, color: "#61DAFB" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Next-js-E-Commerce-Store",
    },
    // Add more project objects here...
  ];

  return (
    <div id="Portfolio" className="bg-white p-8">
      <h1 className="text-3xl text-black mb-5 font-bold text-left">
        Portfolio
      </h1>
      <br />
      <h3 className='text-2xl text-green-500 mb-4 font-bold text-left underline'>Featured Projects</h3>
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <Card {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

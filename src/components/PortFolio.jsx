import React from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Card = ({ image, title, description, techs, githubLink }) => {
  return (
    <motion.div 
      className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={image}
        alt="Project Cover"
        className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-125 hover:contrast-125"
      />
      <div className="p-6">
        <motion.h2 
          className="text-black text-2xl font-bold mb-4 animate__animated animate__fadeInDown"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-700 text-base mb-4 leading-relaxed animate__animated animate__fadeIn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex gap-3 mb-6 animate__animated animate__fadeIn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {techs.map((tech) => (
            <span key={tech.name} className="flex items-center gap-2 py-1 px-3 bg-blue-50 rounded-full text-sm text-blue-700 transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-blue-500/50">
              <FontAwesomeIcon icon={tech.icon} className={`text-${tech.color}`} /> {tech.name}
            </span>
          ))}
        </motion.div>
        <a
          href={githubLink}
          className="inline-block py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-bold uppercase rounded-full tracking-wide transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-blue-500/50 relative overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: "movie_site.png",
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
      image: "wheath_app.png",
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
      image: "to_do_APP.PNG",
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
      image: "ecomerce_1.png",
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
      image: "portfolio_website.png",
      title: "Portfolio Website",
      description: "Developed a sleek portfolio website showcasing projects, skills, and experience with a clean, responsive design.",
      techs: [
        { name: "React", icon: faReact, color: "#61DAFB" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Next-js-E-Commerce-Store",
    },
    {
      image: "YouTube_MP3_1.PNG",
      title: "Youtube to Mp3 Converter",
      description: "Created an efficient YouTube to MP3 converter with a user-friendly interface, offering quick and reliable conversions with a sleek design.",
      techs: [
        {  name: "HTML" ,icon: faHtml5, color: "#E44D26" },
        { name: "CSS", icon: faCss3Alt, color: "#264DE4" },
        { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
      ],
      githubLink: "https://github.com/Mian-Tahir/Youtube-to-Mp3-Converter",
    },
    // Add more project objects here...
  ];

  return (
    <div id="Portfolio" className="bg-white p-8">
      <motion.h1 
        className="text-3xl text-black mb-5  ml-20  font-bold text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h1>
      <br />
      <motion.h3 
        className='text-2xl text-green-500 mb-4  ml-20 font-bold text-left underline'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Featured Projects
      </motion.h3>
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * index }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

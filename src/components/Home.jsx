import React from "react";
import { motion } from "framer-motion";
import profile from "../../public/PORTFOLIO IMGAE.jpg";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { HiArrowSmRight } from "react-icons/hi";
import { ReactTyped } from 'react-typed';

function Home() {
  const handleDownloadCV = async () => {
    try {
      const cvUrl = '/public/Tahir Euro Pass CV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.setAttribute('download', 'Tahir Mehmood-CV.pdf');
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Add success feedback
      // showNotification('CV downloaded successfully!');
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Optional: Add error feedback
      // showNotification('Failed to download CV. Please try again.');
    }
  };
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
          >
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["MernStack Developer", "Full Stack Developer", "Frontend Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              As a dedicated MERN Stack Developer with a year of focused experience, I excel in crafting seamless,
              high-performance web applications. My expertise spans HTML, CSS, and advanced frameworks like Tailwind
              CSS, Material UI, and Bootstrap, alongside JavaScript, React JS, Next JS, Node.js, Express.js, and
              PostgreSQL. I am committed to delivering clean, efficient code that marries design with functionality,
              consistently bringing innovative ideas to life on the web.
            </p>
            <br />
            {/* Social Links */}
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0"
            >
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100040927500381/" target="_blank">
                      <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-125 hover:text-blue-600 hover:shadow-lg duration-500 ease-in-out transition-all" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/m-tahir-mahmood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank">
                      <FaLinkedin className="text-2xl hover:scale-125 hover:text-blue-700 hover:shadow-lg duration-500 ease-in-out transition-all cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/its_mian178?igsh=ZTR0eDVvZjlkbTk3/" target="_blank">
                      <FaInstagramSquare className="text-2xl hover:scale-125 hover:text-pink-600 hover:shadow-lg duration-500 ease-in-out transition-all cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Mian-Tahir/" target="_blank">
                      <FaGithubSquare className="text-2xl hover:scale-125 hover:text-gray-800 hover:shadow-lg duration-500 ease-in-out transition-all cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Tech Stack Icons */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-125 hover:text-green-500 hover:shadow-lg hover:bg-green-50 p-1 rounded-full duration-500 ease-in-out transition-all cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-125 hover:text-gray-800 hover:shadow-lg hover:bg-gray-50 p-1 rounded-full duration-500 ease-in-out transition-all cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-125 hover:text-blue-500 hover:shadow-lg hover:bg-blue-50 p-1 rounded-full duration-500 ease-in-out transition-all cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-125 hover:text-green-600 hover:shadow-lg hover:bg-green-50 p-1 rounded-full duration-500 ease-in-out transition-all cursor-pointer" />
                </div>
              </div>
            </motion.div>
            
            {/* Download CV Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center md:justify-start mt-8"
            >
              <motion.button 
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 mt-8 font-semibold text-white rounded-full 
                          bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400
                          hover:from-blue-700 hover:via-blue-600 hover:to-teal-500
                          shadow-lg hover:shadow-xl
                          transition-all duration-300 ease-in-out
                          overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="text-lg">Download CV</span>
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                  >
                    <HiArrowSmRight  size={30}/>
                  </motion.span>
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1"
          >
            <img src={profile} className="rounded-full md:w-[450px] md:h-[450px]" alt="Profile" />
          </motion.div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
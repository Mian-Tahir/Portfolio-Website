import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profile from "../../public/PORTFOLIO IMGAE.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={profile} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Tahir Mehmood<span className="text-green-500 text-2xl">l</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <motion.div
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map(({ id, text }) => (
            <motion.div
              key={id}
              className="text-sm font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, color: "#007bff" }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div onClick={() => setMenu(!menu)} className="cursor-pointer">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <motion.div
          className="md:hidden bg-white absolute top-16 left-0 right-0 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col items-center justify-center space-y-3 text-xl py-4">
            {navItems.map(({ id, text }) => (
              <motion.li
                key={id}
                className="font-semibold cursor-pointer"
                whileHover={{ scale: 1.1, color: "#007bff" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;

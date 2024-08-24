import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
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
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <hr />
      <footer className="py-12 bg-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Navigation Links */}
            <ul className="flex space-x-6 mb-6 md:mb-0">
              {navItems.map(({ id, text }) => (
                <li key={id} className="text-sm font-semibold cursor-pointer hover:text-black ">
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="https://www.facebook.com/profile.php?id=100040927500381/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="hover:text-black  cursor-pointer" />
              </a>
              <a href="https://github.com/Mian-Tahir/" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={24} className="hover:text-black cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/its_mian178?igsh=ZTR0eDVvZjlkbTk3/" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare size={24} className="hover:text-black  cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/m-tahir-mahmood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-black -500 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8 text-center">
            <p className="text-sm">&copy; 2024 Tahir Mehmood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

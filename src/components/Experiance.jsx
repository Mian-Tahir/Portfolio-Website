import React, { useEffect } from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import express from "../../public/express.png";
import mongodb from "../../public/mongodb.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Experiance() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React",
    },
    {
      id: 5,
      logo: node,
      name: "Node.js",
    },
    {
      id: 6,
      logo: express,
      name: "Express.js",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1
          className="text-3xl font-bold mb-5"
          data-aos="fade-down"
        >
          Experience
        </h1>
        <p className="mb-8" data-aos="fade-right">
          I've more than 1 year of experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src={logo}
                className="w-[135px] h-[135px] rounded-full object-cover "
                alt={name}
              />
              <div className="mt-3 text-lg  text-center font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;

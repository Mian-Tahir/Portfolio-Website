import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1
          className="text-3xl font-bold mb-5"
          data-aos="fade-down"
        >
          About
        </h1>
        <p data-aos="fade-up">
          Hello, my name is <span className="font-bold">Tahir Mehmood</span>. A dedicated MERN Stack Developer with
          a year of focused experience, I excel in crafting seamless,
          high-performance web applications. My expertise spans HTML, CSS, and
          advanced frameworks like Tailwind CSS, Material UI, and Bootstrap,
          alongside JavaScript, React JS, Next JS, Node.js, Express.js, and
          PostgreSQL. I am committed to delivering clean, efficient code that
          marries design with functionality, consistently bringing innovative
          ideas to life on the web.
        </p>
        <br />
        <h1 className="text-green-600 font-bold text-xl" data-aos="fade-right">
          Education & Training
        </h1>
        <ul className="list-disc ml-5 space-y-4" data-aos="fade-left">
          <li>
            <h5 className="font-semibold text-lg">BS Computer Science</h5>
            <p>University of Agriculture Faisalabad (09/2019 - 06/2023)</p>
            <p>CGPA: 3.1/4</p>
          </li>
          <li>
            <h5 className="font-semibold text-lg">FSc Pre-Engineering</h5>
            <p>Govt Post Graduate College Gojra (08/2017 - 04/2019)</p>
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl" data-aos="fade-right">
          Skills & Expertise
        </h1>
        <p data-aos="fade-up">
          I have expertise in MERN stack development, including proficiency in
          HTML, CSS, and JavaScript. I am skilled in working with React.js,
          Next.js, Node.js, Express.js, and MongoDB for full-stack development.
          Additionally, I have experience with Tailwind CSS, Bootstrap, Material
          UI for styling, and Redux, Redux Toolkit, and Axios for state
          management and API handling.
        </p>
        <br />
        
        
        <h1 className="text-green-600 font-semibold text-xl" data-aos="fade-right">
          Professional Experience
        </h1>
        <ul className="list-disc ml-5 space-y-4" data-aos="fade-left">
        <li>
            <h5 className="font-semibold text-lg">MERN Stack Developer</h5>
            <p>MiniByte.ai (09/2024 -Continue ), Rawalpindi</p>
            <ul className="ml-5 list-disc space-y-2">
  <li>
  Engineered scalable web applications utilizing the MERN stack.
  </li>
  <li>
  Worked closely with cross-functional teams for design and deployment.
  </li>
  <li>
   Used contemporary tools such as RESTful APIs, Redux Toolkit, and Redux for managing application state.
  </li>
  <li>
    Managed project versioning and team collaboration using Git.
  </li>
  <li>
    Led the integration of third-party services and APIs to enhance application functionality.
  </li>
  <li>
    Optimized application performance and ensured a seamless user experience through code refactoring and debugging.
  </li>
  <li>
    Contributed to the creation of automated testing pipelines, improving code quality and deployment speed.
  </li>
  <li>
    Played a key role in maintaining high availability and scalability of web applications in production environments.
  </li>
  <li>
    Delivered responsive and adaptive designs, ensuring mobile-first, cross-browser compatibility.
  </li>
  <li>
    Worked on diverse projects such as Hotel Management System, CoinGecko, FaceSwap AI, AI Call Agent, and AI Video Generation.
  </li>
  <li>
    Enhanced user experience and functionality in AI-driven projects like FaceSwap and AI Video Generation.
  </li>
  <li>
    Contributed to the development of an AI Call Agent project, improving communication and customer interaction.
  </li>
</ul>

          </li>
          <li>
            <h5 className="font-semibold text-lg">Junior MERN Stack Developer</h5>
            <p>CortechSols Pvt Ltd (03/2024 - 05/2024), Rawalpindi</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Developed scalable web applications using the MERN stack.
              </li>
              <li>
                Collaborated on cross-functional teams for design and deployment.
              </li>
              <li>
                Utilized modern tools like RESTful APIs, Redux Toolkit, and Redux for state management.
              </li>
              <li>
                Managed project versioning and team collaboration using Git.
              </li>
              <li>
                Acquired hands-on experience with Next.js for advanced web development proficiency.
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-lg">Full Stack Developer</h5>
            <p>Slash Byte (12/2023 - 03/2024), Faisalabad</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Acquired practical expertise in React.js, Node.js, Express.js, and Material UI.
              </li>
              <li>
                Contributed to high-quality full-stack development projects in team settings.
              </li>
              <li>
                Gained hands-on experience with Git and GitHub for version control.
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-lg">MERN Stack Bootcamp</h5>
            <p>Knowledge Streams (09/2023 - 12/2023), Lahore</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Developed and designed a fully functional e-commerce store.
              </li>
              <li>
                Utilized React.js to create a dynamic and responsive user interface.
              </li>
              <li>
                Integrated RESTful APIs for front-end and back-end communication.
              </li>
              <li>
                Achieved optimal performance with efficient API response times.
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl" data-aos="fade-right">
          Certificates
        </h1>
        <ul className="list-disc ml-5 space-y-4" data-aos="fade-up">
          <li>
            <h5 className="font-semibold text-lg">
              Learn MERN Stack Development
            </h5>
            <p>Knowledge Streams (09/2023 - 12/2023)</p>
          </li>
          <li>
            <h5 className="font-semibold text-lg">
              Learn Front-End Development
            </h5>
            <p>PNY Training and Institutions (05/2022 - 07/2022)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;

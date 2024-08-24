import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, my name is Tahir Mehmood. A dedicated MERN Stack Developer with
          a year of focused experience, I excel in crafting seamless,
          high-performance web applications. My expertise spans HTML, CSS, and
          advanced frameworks like Tailwind CSS, Material UI, and Bootstrap,
          alongside JavaScript, React JS, Next JS, Node.js, Express.js, and
          PostgreSQL. I am committed to delivering clean, efficient code that
          marries design with functionality, consistently bringing innovative
          ideas to life on the web.
        </p>
        <br />
        <h1 className="text-green-600 font-bold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc ml-5">
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
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <p>
          I have expertise in MERN stack development, including proficiency in
          HTML, CSS, and JavaScript. I am skilled in working with React.js, 
          Next.js, Node.js, Express.js, and MongoDB for full-stack development.
          Additionally, I have experience with Tailwind CSS, Bootstrap, Material
          UI for styling, and Redux, Redux Toolkit, and Axios for state 
          management and API handling.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
  Professional Experience
</h1>
<ul className="list-disc ml-5">
  <li>
    <h5 className="font-semibold text-lg">Junior MERN Stack Developer</h5>
    <p>CortechSols Pvt Ltd (03/2024 - 5/2024), Rawalpindi</p>
    <ul className="ml-5 list-disc">
      <li>Developed scalable web applications using the MERN stack.</li>
      <li>Collaborated on cross-functional teams for design and deployment.</li>
      <li>Utilized modern tools like RESTful APIs, Redux Toolkit, and Redux for state management.</li>
      <li>Expertly managed project versioning and team collaboration using Git.</li>
      <li>Currently acquiring hands-on experience with Next.js for advanced web development proficiency.</li>
    </ul>
  </li>
  <li>
    <h5 className="font-semibold text-lg">Junior Full Stack Developer</h5>
    <p>Slash Byte (12/2023 - 03/2024), Faisalabad</p>
    <ul className="ml-5 list-disc">
      <li>Acquired practical expertise in React.js, Node.js, Express.js, and Material UI.</li>
      <li>Collaborated effectively in teams, contributing to high-quality full-stack development projects.</li>
      <li>Gained hands-on experience with Git and GitHub for version control.</li>
    </ul>
  </li>
  <li>
    <h5 className="font-semibold text-lg">MERN Stack Bootcamp</h5>
    <p>Knowledge Streams (09/2023 - 12/2023),Lahore</p>
    <ul className="ml-5 list-disc">
      <li>Developed and designed a fully functional e-commerce store.</li>
      <li>Utilized React.js to create a dynamic and responsive user interface.</li>
      <li>Successfully integrated RESTful APIs for front-end and back-end communication.</li>
      <li>Achieved an average API response time for optimal performance.</li>
    </ul>
  </li>
</ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Certificates</h1>
<ul className="list-disc ml-5">
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

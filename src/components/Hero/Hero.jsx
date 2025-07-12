import React from "react";
import "./Hero.css";
import profileImg from "../../assets/photo-modified_optimized.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImg} alt="profile" />
      <h1><span>I'm Sharad Pandey</span>, Full Stack Developer</h1>
      <p>
        Skilled in full stack web development with experience in HTML, CSS,
        JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB. Proficient
        in building responsive interfaces, developing RESTful APIs, and managing
        data with NoSQL databases. Familiar with Git for version control and
        Postman for API testing.
      </p>
      <div className="hero-action">
        <div
          className="hero-connect"
          onClick={() => {
            document.getElementById("get-in-touch")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Connect with me hello
        </div>

        <a className="hero-resume" href="/Sharad_Pandey_resume.pdf" download>
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

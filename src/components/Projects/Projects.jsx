import React from "react";
import "./Projects.css";
import weatherImg from "../../assets/weatherpic.png";
import passwordImg from "../../assets/passwordpic.png";
import portfolioImg from "../../assets/portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing my skills and projects.",
    image: portfolioImg,
    
    live: "#",
    github: "https://github.com/Sharad250704/portfoli"
  },
  {
    title: "Weather Broadcast WEB App",
    description: "A responsive web application that displays real-time weather information using OpenWeatherMap API.",
    image:weatherImg,
    live: "https://weatherbroadcast-gamma.vercel.app/",
    github: "https://github.com/Sharad250704/weatherbroadcast"
  },
  {
    title: "Password Generator",
    description: "A simple and secure password generator web app.",
    image:passwordImg,
    live: "https://passwordgenerator-psi-six.vercel.app/",
    github: "https://github.com/Sharad250704/passwordgenerator"
  }
];

const Projects = () => (
  <div className="projects-section" id="projects-section">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
        <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
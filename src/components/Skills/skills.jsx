import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Development Skills",
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"
    ]
  },
  {
    title: "Programming Skills",
    skills: [
      "C", "C++", "JavaScript", "Python"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "Postman", "VS Code", "Vercel"
    ]
  }
];

const Skills = () => (
  <div className="skills-section" id="skills-section">
    <h2>Skills</h2>
    <div className="skills-cards">
      {skillCategories.map((category, idx) => (
        <div className="skills-card" key={idx}>
          <h3>{category.title}</h3>
          <ul>
            {category.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navbar'>
      <div className="logo-text" style={{
        fontWeight: 700,
        fontSize: "2rem",
        background: "linear-gradient(90deg,#DF8908 10%,#B415FF 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "2px"
      }}>
        Sharad
      </div>
      <div
        className={`nav-menu-toggle${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>
      <ul className={`nav-menu${menuOpen ? " show" : ""}`}>
        <li onClick={() => handleNavClick("home")}>Home</li>
        <li onClick={() => handleNavClick("skills-section")}>Skills</li>
        <li onClick={() => handleNavClick("projects-section")}>Projects</li>
        <li onClick={() => handleNavClick("get-in-touch")}>Contact</li>
      </ul>
      <div
        className="nav-connect"
        onClick={() => {
          setMenuOpen(false);
          document.getElementById("get-in-touch")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Connect with me
      </div>
    </div>
  )
}

export default Navbar

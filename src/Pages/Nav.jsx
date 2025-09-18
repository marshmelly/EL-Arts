import React, { useState } from "react";
import "./Nav.css";
import el from './Images/el ok stand-alone-black-01.png'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();

  const handleClick = (path, e) => {
    e.preventDefault();
    setActiveLink(path);
    navigate(path);
    
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={el} alt="Logo" className="logo-image" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a
            href="/home"
            className={activeLink === "/home" ? "active" : ""}
            onClick={(e) => handleClick("/home", e)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/artworks"
            className={activeLink === "/artworks" ? "active" : ""}
            onClick={(e) => handleClick("/artworks", e)}
          >
            2DArtworks
          </a>
        </li>
        <li>
          <a
            href="/assets"
            className={activeLink === "/assets" ? "active" : ""}
            onClick={(e) => handleClick("/assets", e)}
          >
            3DAssets
          </a>
        </li>
        <li>
          <a
            href="/tutorials"
            className={activeLink === "/tutorials" ? "active" : ""}
            onClick={(e) => handleClick("/tutorials", e)}
          >
            Tutorials
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={(e) => handleClick("/about", e)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={(e) => handleClick("/contact", e)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

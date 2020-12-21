import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Allan3 from "../images/Allan3.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log("clicking");
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <>
      <nav className="navbar">
        <span className="nav-title">
          <img src={Allan3} alt="allan3" className="navbar-image" />
          <Link to="/" className="navbar-logo">
            My portfolio
          </Link>
        </span>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Stack
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

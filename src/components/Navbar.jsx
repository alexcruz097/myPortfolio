import React, { useState } from "react";
import {
  faHome,
  faUserAstronaut,
  faBriefcase,
  faPhoneAlt,
  faHamburger,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  // Use this variable to toggle the state of the hamburger
  const [toggleHamburgerClick, setHamburgerClick] = useState(false);

  // inline style to toggle the links
  const showNavLinks = {
    transform: `translateX(${0}%)`,
    opacity: 1,
  };
  const hideNavLinks = {
    transform: `translateX(${150}%)`,
    opacity: 0,
  };
  // inline styles to rotate hamburger
  const rotateHam = {
    transform: "rotate(-90deg)",
    transition: "all .4s",
  };
  const UnRotateHam = {
    transform: "rotate(0deg)",
    transition: "all .4s",
  };

  // Function will set the state of the hamburger to false
  function hamburgerNotClick() {
    setHamburgerClick(true);
  }

  // Function will set the state of the hamburger to true
  function hamburgerIsClick() {
    setHamburgerClick(false);
  }
  // Make nav-bar hide when scrolling down
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      hamburgerIsClick();
    }
  }

  return (
    <section className="nav-section">
      <nav className="navbar">
        <a className="logo" href="#home">
          <h1>
            Alex <span>Cruz</span>
          </h1>
        </a>

        <ul
          className="nav-links"
          style={toggleHamburgerClick ? showNavLinks : hideNavLinks}
        >
          <FontAwesomeIcon
            size="3x"
            onClick={hamburgerIsClick}
            className="minus-icon"
            icon={faMinus}
          />
          <li onClick={hamburgerIsClick}>
            <a className="home-icon" href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>

          <li onClick={hamburgerIsClick}>
            <a className="about-icon" href="#home">
              <FontAwesomeIcon icon={faUserAstronaut} /> About
            </a>
          </li>
          <li onClick={hamburgerIsClick}>
            <a className="projects-icon" href="#projects">
              <FontAwesomeIcon icon={faBriefcase} /> Projects
            </a>
          </li>
          <li onClick={hamburgerIsClick}>
            <a className="contact-icon" href="#contactMe">
              <FontAwesomeIcon icon={faPhoneAlt} /> Contact
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <FontAwesomeIcon
            onClick={
              toggleHamburgerClick ? hamburgerIsClick : hamburgerNotClick
            }
            size="5x"
            icon={faHamburger}
            // rotate when is click
            style={toggleHamburgerClick ? rotateHam : UnRotateHam}
          />
        </div>
      </nav>
    </section>
  );
};
export default Navbar;

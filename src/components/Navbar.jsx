import React, { useState, useEffect } from "react";
import {
  faHome,
  faBriefcase,
  faPhoneAlt,
  faHamburger,
  faMinus,
   faUserAstronaut
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing smoth scrolling
import { Link } from "react-scroll";
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

  // Function will set the state of the hamburger to true
  function hamburgerNotClick() {
    setHamburgerClick(true);
  }

  // Function will set the state of the hamburger to false
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
  
  // this code will check the width and heigth of the screen and store it in a variable
  const [windowsSize, setwindowsSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setwindowsSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

  
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
          style={
            (toggleHamburgerClick || windowsSize[0] > 767
              ? showNavLinks
              : hideNavLinks,
            windowsSize[0] > 767 || toggleHamburgerClick
              ? showNavLinks
              : hideNavLinks)
          }
        >
          <FontAwesomeIcon
            size="2x"
            onClick={hamburgerIsClick}
            className="minus-icon"
            icon={faMinus}
          />
          <Link
            className="home-icon"
            onClick={hamburgerIsClick}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link
            className="home-icon"
            onClick={hamburgerIsClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-58}
            duration={1000}
          >
            <FontAwesomeIcon icon={faUserAstronaut} /> About Me
          </Link>

          <Link
            className="home-icon"
            onClick={hamburgerIsClick}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
          >
            <FontAwesomeIcon icon={faBriefcase} /> Projects
          </Link>
          <Link
            className="home-icon"
            onClick={hamburgerIsClick}
            activeClass="active"
            to="contactMe"
            spy={true}
            smooth={true}
            offset={-5}
            duration={1000}
          >
            <FontAwesomeIcon icon={faPhoneAlt} /> Contacts
          </Link>
          <a
            href="https://github.com/alexcruz097/myPortfolio"
            target="_blank"
            className="portfolio-github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              className="portfolio-icon"
            />
            Portfolio
          </a>
        </ul>
        <div className="hamburger">
          <FontAwesomeIcon
            onClick={
              toggleHamburgerClick ? hamburgerIsClick : hamburgerNotClick
            }
            size="3x"
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

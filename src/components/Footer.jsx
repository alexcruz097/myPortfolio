import React from "react";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  let currentYear = new Date();

function scrollToTop() {
  scroll.scrollToTop();
  }
  

  return (
    <footer className="footer">
      <h1 className="copy-rights">
        Alex Cruz &copy;
        <a>{currentYear.getFullYear()}</a>
      </h1>
      <a className="to-top" onClick={scrollToTop}>
        <FontAwesomeIcon color="#cecece" icon={faHandPointUp} size="2x" />
        To top
      </a>
      <p>
        Created with <span className="react-created">React Js</span>
      </p>
    </footer>
  );
};
export default Footer;

import React, { useState }from "react";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  let currentYear = new Date();
  function scrollToTop() {
    scroll.scrollToTop();
  }

  
const [showScroll, setShowScroll] = useState(false);
const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset >  400) {
    setShowScroll(true);
  } else if (showScroll && window.pageYOffset <= 400) {
    setShowScroll(false);
  }
};
window.addEventListener("scroll", checkScrollTop);

  return (
    <footer className="footer">
      <h1 className="copy-rights">
        Alex Cruz &copy;
        <a>{currentYear.getFullYear()}</a>
      </h1>
      <a  onClick={scrollToTop}>
        <FontAwesomeIcon
          icon={showScroll ? faArrowCircleUp : null}
          className="to-top"
        />
      </a>
      <p>
        Created with <span className="react-created">React Js</span>
      </p>
    </footer>
  );
};
export default Footer;

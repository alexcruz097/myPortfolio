import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = (props) => {

  return (
    <div className="about-card">
      <FontAwesomeIcon
        icon={props.icon}
        className="icon-about"
      />
      <h1 className="about-header">{props.header}</h1>
      <p className="about-description">{props.description}</p>
    </div>
  );
};

export default AboutMe;

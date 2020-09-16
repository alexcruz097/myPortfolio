import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = (props) => {
  const aboutIconStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#f2a365",
    color: "white",
    MozBorderRadius: "70px",
    WebkitBorderRadius: "70px",
    BorderRadius: "70px",
  };
  return (
    <div className="about-card">
      <FontAwesomeIcon style={aboutIconStyle} icon={props.icon} />
          <h1 className="about-header">{props.header}</h1>
      <p className="about-description">
       {props.description}
      </p>
    </div>
  );
};

export default AboutMe;

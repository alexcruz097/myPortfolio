import React from "react";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    // className = "project-gif"
    <div className="card-menu">
      <a href={props.url}>
        <h1 className="projects-name">{props.name}</h1>
      </a>
      <p className="description">
        <FontAwesomeIcon icon={faInfoCircle} color="#222831" />{" "}
        {props.description}
      </p>
      <a href={props.url} target="_blank">
        <video
          className="project-gif"
          autoPlay=""
          loop
          muted
        >
          <source
            type="video/mp4"
            data-reactid=".0.1.0.0.0"
            src={props.video}
          />
        </video>
      </a>
      <ol className="tech-use">
        {/* Iterrate over the array return a list item */}
        {props.techUse.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ol>
      <a href="https://github.com/alexcruz097/weather-react" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#222831" size="2x" />
      </a>
    </div>
  );
};

export default Card;

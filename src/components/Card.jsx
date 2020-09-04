import React from "react";
import WeatherApp from "../videos/Weather-App.gif";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
   
      <div className="card-menu" >
        <h1 className="projects-name">{props.name}</h1>
      <p className="description"><FontAwesomeIcon icon={faInfoCircle} color="#222831" />  {props.description}</p>
        <a href="https://eloquent-sammet-a7d128.netlify.app" target="_blank">
          <img className="project-gif" src={WeatherApp} />
        </a>
        <ol className="tech-use">
          {/* Iterrate over the array return a list item */}
          {props.techUse.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ol>
        <a href="https://github.com/alexcruz097/weather-react" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#222831" size="3x" />
        </a>
      </div>
  
  );
};

export default Card;

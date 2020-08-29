import React from "react";
import gitHub from "../images/gitHub.png";

import  WeatherApp  from "../videos/Weather-App.gif"
const Card = (props) => {
console.log(props.video)


  return (
    <div className="card-menu" id="projects">
      <h1 className="projects-name">{props.name}</h1>
      <p className="description">{props.description}</p>
      <a href="https://eloquent-sammet-a7d128.netlify.app" target="_blank"><img className="project-gif" src={WeatherApp} /></a>
      
      <ol className="tech-use">
        {/* Iterrate over the array return a list item */}
        {
          (props.techUse).map((tech) =>
          {
            return(<li>{tech}</li>)
        })
       }
      
      </ol>
      <a href="https://github.com/alexcruz097/weather-react" target="_blank"><img className="gitHub" src={gitHub} /></a>
    </div>
  );
};

export default Card;

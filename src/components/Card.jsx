import React from "react";
import gitHub from "../images/gitHub.png";
const Card = () => {
  return (
    <div className="card-menu" id="projects">
      <h1 className="projectsName">Menu</h1>
      <p className="description">
        With this menu site you have a variety of choices to choose from.
      </p>
      <video>
        <source src="../video/menuVideo.mp4" type="video/mp4" />
      </video>
      <ul className="techUse">
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
      </ul>
      <img className="gitHub" src={gitHub} />
    </div>
  );
};

export default Card;

import React from "react";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div
      className="card-menu"
      // if the mouse enters the video will play
      onMouseOver={(event) => {
        // dom manipulation to always target the video and play it from the parent element
        switch (event.target.className) {
          case "card-menu":
            event.target.firstChild.nextSibling.nextSibling.firstChild.play();
            break;
          case "projects-name":
            event.target.parentNode.nextSibling.nextSibling.firstChild.play();
            break;
          case "description":
            event.target.nextSibling.firstChild.play();
            break;
          case "video-container":
            event.target.firstChild.play();
            break;
          case "project-gif":
            event.target.play();
            break;
          case "tech":
            event.target.parentNode.previousElementSibling.firstChild.play();
            break;
        }
      }}
      // if the mouse exits the card the video will stop
      onMouseOut={(event) => {
        // dom manipulation to always target the video and play it from the parent element
        switch (event.target.className) {
          case "card-menu":
            event.target.firstChild.nextSibling.nextSibling.firstChild.pause();
            break;
        }
      }}
    >
      <a className="name-link" href={props.url} target="_blank">
        <h1 className="projects-name">{props.name}</h1>
      </a>
      <p className="description">
        <FontAwesomeIcon icon={faInfoCircle} color="#222831" />{" "}
        {props.description}
      </p>
      <a className="video-container" href={props.url} target="_blank">
        <video
          className="project-gif"
          loop
          muted
          // onMouseOut={e => (e.target.firstChild.nextSibling.nextSibling.firstChild.pause())}
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
          return <li className="tech">{tech}</li>;
        })}
      </ol>
      <a href={props.gitHub} target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#222831" size="2x" />
      </a>
    </div>
  );
};

export default Card;

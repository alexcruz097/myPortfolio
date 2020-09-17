import React from "react";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = (props) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };


  return (
    <div
      className="card-menu"
      // if the mouse enters the video will play
      onMouseOver={(event) => {
        // dom manipulation to always target the video and play it from the parent element
        switch (event.target.className) {
          case "card-menu":
            event.target.firstChild.nextSibling.nextSibling.nextSibling.firstChild.play();
            break;
          case "projects-name":
            event.target.parentNode.nextSibling.nextSibling.nextSibling.firstChild.play();
            break;
          case "description":
            event.target.nextSibling.nextSibling.firstChild.play();
            break;
          case "video-container":
            event.target.firstChild.play();
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
            event.target.firstChild.nextSibling.nextSibling.nextSibling.firstChild.pause();
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
      {/* show this thumbnail while the video is loading */}
      <img
        src={props.thumbnail}
        className="card-thumbnail"
        style={{ display: isVideoLoaded ? "none" : "block" }}
      />
   
      <a className="video-container" href={props.url} target="_blank">
        <video
          className="project-gif"
          loop
          muted
          playsInline
          onLoadedData={onLoadedData}
          style={{ display: isVideoLoaded ? "block" : "none" }}
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
        {props.techUse.map((tech, index) => {
          return <li className="tech" key={index}>{tech}</li>;
        })}
      </ol>
      <a href={props.gitHub} target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#222831" size="2x" />
      </a>
    </div>
  );
};

export default Card;

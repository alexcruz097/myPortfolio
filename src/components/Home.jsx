import React from "react";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="homeContent">
        <h1 className="header">Hello, My name is Alex Cruz</h1>
        <p className="my-description">
          I'am a Self Taught Front-End Web Developer.
        </p>
        <a href="#contactMe">
          <button className="hireBTN">
            <FontAwesomeIcon icon={faHandshake} />
            HIRE ME
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;

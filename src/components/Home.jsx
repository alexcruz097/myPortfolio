import React from "react";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing smoth scrolling
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section className="home">
      <div className="homeContent">
        <h1 className="header">Hello, My name is Alex Cruz</h1>
        <p className="my-description">
          I'am a Self Taught Front-End Web Developerr.
        </p>
        <Link
          className="hireBTN"
          to="contactMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <FontAwesomeIcon className="handshake-icon" icon={faHandshake} color="#cecece" /> HIRE ME
          </Link>
      </div>
    </section>
  );
};

export default Home;

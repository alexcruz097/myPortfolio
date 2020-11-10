import React from "react";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing smoth scrolling
import { Link } from "react-scroll";
// typewriter-effect
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section className="home">
      <div className="homeContent">
        <h1 className="header">Hello, My name is Alex Cruz</h1>
        <p className="my-description">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pasteString("A Front-End Web Developer with knowledge of:")
                .pauseFor(450)
                .typeString(" HTMl")
                .pauseFor(650)
                .deleteChars(4)
                .pauseFor(200)
                .typeString(" CSS")
                .pauseFor(600)
                .deleteChars(3)
                .pauseFor(200)
                .typeString(" BootStrap")
                .pauseFor(650)
                .deleteChars(9)
                .pauseFor(200)
                .typeString(" JavaScript")
                .pauseFor(650)
                .deleteChars(10)
                .pauseFor(200)
                .typeString(" Node Js")
                .pauseFor(650)
                .deleteChars(7)
                .pauseFor(200)
                .typeString(" Express Js")
                .pauseFor(650)
                .deleteChars(10)
                .pauseFor(200)
                .typeString(" EJS")
                .pauseFor(650)
                .deleteChars(3)
                .start();
            }}
            options={{
              wrapperClassName: "Typewriter__wrapper",
              skipAddStyles: false,
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <Link
          className="hireBTN"
          to="contactMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <FontAwesomeIcon
            className="handshake-icon"
            icon={faHandshake}
            color="#cecece"
          />{" "}
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Home;

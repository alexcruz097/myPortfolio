import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe";
import Card from "./Card.jsx";
import Contact from "./Contacts.jsx";
import Footer from "./Footer.jsx";
// videos imported
import weatherVideo from "../videos/weather.mp4";
import trivia from "../videos/trivia.mp4";
import jobApp from "../videos/jobSearch.mp4";
import microsoft from "../videos/microsoft.mp4";
import menu from "../videos/menu.mp4";
import tinDog from "../videos/tinDog.mp4";
import funFact from "../videos/funFacts.mp4";
import budgetApp from "../videos/budgetApp.mp4";
// import Thumbnails
import weatherThumb from "../thumbnail/weatherThumb.jpg";
import triviaThumb from "../thumbnail/triviaThumb.jpg";
import jobSearchThumb from "../thumbnail/jobSearchThumb.jpg";
import microThumb from "../thumbnail/microThumb.jpg";
import menuThumb from "../thumbnail/menuThumb.jpg";
import tinDogThumb from "../thumbnail/tinDogThumb.jpg";
import funThumb from "../thumbnail/funThumb.jpg";
import budgetThumb from "../thumbnail/budgetThumb.jpg";
// icons for AboutMe component
import { faRunning,faFlushed} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
function App(e) {
  // get data for Card component
  let data = require("../cardInfo.json");
  let videos = [
    jobApp,
    trivia,
    weatherVideo,
    budgetApp,
    microsoft,
    menu,
    tinDog,
    funFact,
  ];
  let thumbnail = [
    jobSearchThumb,
    triviaThumb,
    weatherThumb,
    budgetThumb,
    microThumb,
    menuThumb,
    tinDogThumb,
    funThumb,
  ];
  let icons = [faRunning, faFlushed, faProductHunt];
  return (
    <div className="whole-page">
      <Navbar />
      <Home id="home" />

      <section className="aboutMe-section" id="about">
        <h2 className="about-section-header">About Me</h2>
        {data[0].aboutData.map((data, index) => {
          return (
            <AboutMe
              key={index}
              icon={icons[index]}
              header={data.header}
              description={data.description}
            />
          );
        })}
      </section>
      <section className="projects-section" id="projects">
        {data[0].cardData.map((data, index) => {
          return (
            <Card
              key={index}
              url={data.url}
              name={data.name}
              // input video to props by using index and the videos array
              video={videos[index]}
              // thumbnail
              thumbnail={thumbnail[index]}
              description={data.description}
              techUse={data.techUse}
              gitHub={data.gitHub}
            />
          );
        })}
      </section>
      <Contact id="contactMe" />
      <Footer />
    </div>
  );
}

export default App;

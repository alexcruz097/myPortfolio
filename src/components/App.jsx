import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Card from "./Card.jsx";

import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
// videos imported
import WeatherVideo from "../videos/weatherApp.gif"
import TriviaVideo from "../videos/trivia-App.gif"
import Seasons from "../videos/seasons.gif"
import MicrosoftClone from "../videos/microsoftClone.gif"
import menu from "../videos/menu.gif"
import TinDog from "../videos/TinDogBootstrap.gif";
import FunFact from "../videos/funFacts.gif"
function App() {
  let data = require("../cardInfo.json");
  let videos = [WeatherVideo, TriviaVideo, Seasons, Seasons, MicrosoftClone, menu, TinDog, FunFact]
  return (
    <div className="whole-page">
      <Navbar />
      <Home id="home" />
      <section className="projects-section" id="projects">
        {data.map((data, index) => {
          return (
            <Card
              key={index}
              url={data.url}
              name={data.name}
              // input video to props by using index and the videos array
              video={videos[index]}
              description={data.description}
              techUse={data.techUse}
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

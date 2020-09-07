import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Card from "./Card.jsx";

import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
// videos imported
import weatherVideo from "../videos/weather.mp4"
import trivia from "../videos/trivia.mp4"
import seasons from "../videos/seasons.mp4"
import microsoft from "../videos/microsoft.mp4"
import menu from "../videos/menu.mp4"
import tinDog from "../videos/tinDog.mp4"
import funFact from "../videos/funFacts.mp4"
function App(e) {
  let data = require("../cardInfo.json");
  let videos = [trivia, weatherVideo, seasons, seasons, microsoft, menu, tinDog, funFact]
 

 
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
              gitHub ={data.gitHub}
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

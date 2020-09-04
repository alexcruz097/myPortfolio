import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Card from "./Card.jsx";
import data from "../cardInfo.json";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="whole-page">
      <Navbar />
      <Home id="home" />

      <section className="projects-section" id="projects">
        {data.map((data, index) => {
          return (
            <Card
              key={index}
              name={data.name}
              video={data.video}
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

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
      <Home />
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

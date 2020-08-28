import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Card from "./Card.jsx";
function App() {
  return (
    <div className="whole-page">
      <Navbar />
      <Home />
      <section className="projects-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;

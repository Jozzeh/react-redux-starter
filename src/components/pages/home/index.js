import React from "react";
import "./home.style.css";
import Intro from "../../blocks/home/Intro";
import Usage from "../../blocks/home/Usage";
import Packages from "../../blocks/home/Packages";

const Home = () => {
  return (
    <section className="home">
      <Intro />
      <Usage />
      <Packages />
    </section>
  );
};

export default Home;

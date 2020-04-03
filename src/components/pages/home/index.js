import React from "react";
import "./home.style.css";
import Intro from "../../blocks/home/Intro";
import Bem from "../../blocks/home/Bem";

const Home = () => {
  return (
    <section className="home">
      <Intro/>
      <Bem />
      <h2>Redux async fetch call</h2>
      <p>Here's a chuck norris quote to brighten your day...</p>
      <p>""</p>
      chuck norris random button
      <h2>Redux inpersistence</h2>
      <p>
        The menu has a redux reducer, but this is not persisted.
        <br />
        The user could navigate to a certain page which would defeat the purpose
        of persisting data).
      </p>
      <h2>Redux persistence</h2>
      <p>
        Below you can find an example of Redux persistence. The count is loaded
        and rendered in multiple components.
        <br />
        To see the persistence in action, refresh the page after incrementing or
        decrementing the counter.
      </p>
      <div className="page-section">
        <p className="text__white">Page component - Counter: </p>
        <div className="block-section">
          <p className="text__white">Block component - Counter: </p>
          <div className="element-section">
            <p className="text__white">Element components - Counter: </p>
            increment button decrement button
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

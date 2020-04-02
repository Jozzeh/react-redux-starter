import React from "react";
import "./home.style.css";

const Home = () => {
  return (
    <section className="home">
      <h1>Home</h1>
      <p>This is a starters project. It encompasses some items, such as: </p>
      <ul>
        <li>React & Redux</li>
        <li>Component folder structure</li>
        <li>Redux folder structure</li>
        <li>Basic testing</li>
      </ul>
      <p className="small">
        Please note that pages can be filled with only elements if blocks are
        not applicable.
      </p>
      <h2>BEM methodology (CSS)</h2>
      <p>
        To style components, this project uses the BEM methodology. This method
        is complementairy with our folder structure and certain component
        libraries.
      </p>
      <a href="https://en.bem.info/" target="_blank" rel="noopener noreferrer">
        More information about BEM
      </a>
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

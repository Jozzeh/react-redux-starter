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

      <h2>BEM methodology</h2>
      <p>
        To style components, this project uses the BEM methodology. This method
        is complementairy with our folder structure and certain component
        libraries.
      </p>
      <a href="https://en.bem.info/" target="_blank" rel="noopener noreferrer">
        More information about BEM
      </a>

      <h2>Redux persistence</h2>
      <p>Below you can find an example of Redux persistence.</p>

      <div className="page-section">
        <div className="block-section">
          <div className="element-section">counter</div>
          <div className="element-section">increment button</div>
          <div className="element-section">decrement button</div>
        </div>
      </div>
    </section>
  );
};

export default Home;

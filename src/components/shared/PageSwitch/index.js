import React from "react";
import "./pageSwitch.style.css";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Structure from "../../pages/Structure";
import Layout from "../../pages/Layout";
import Redux from "../../pages/Redux";
import Async from "../../pages/Async";

const PageSwitch = () => {
  return (
    <main>
      <div className="main__container">
        <Switch>
          <Route path="/testing">testing</Route>
          <Route path="/async">
            <Async />
          </Route>
          <Route path="/redux">
            <Redux />
          </Route>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/structure">
            <Structure />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default PageSwitch;

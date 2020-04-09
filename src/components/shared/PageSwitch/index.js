import React from "react";
import "./pageSwitch.style.css";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Structure from "../../pages/Structure";

const PageSwitch = () => {
  return (
    <main>
      <div className="main__container">
        <Switch>
          <Route path="/testing">testing</Route>
          <Route path="/async">async</Route>
          <Route path="/redux">state</Route>
          <Route path="/layout">css</Route>
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

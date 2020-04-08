import React from "react";
import "./pageSwitch.style.css";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";

const PageSwitch = () => {
  return (
    <main>
      <div className="main__container">
        <Switch>
          <Route path="/testing">testing</Route>
          <Route path="/redux">state</Route>
          <Route path="/layout">css</Route>
          <Route path="/structure">structure</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default PageSwitch;

import React from "react";
import "./pageSwitch.style.css";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home";

const PageSwitch = () => {
  return (
    <main>
      <div className="main__container">
        <Switch>
          <Route path="/contact">contact</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default PageSwitch;

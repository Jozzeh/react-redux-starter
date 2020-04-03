import React from "react";
import "./pageSwitch_Style.css";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";

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

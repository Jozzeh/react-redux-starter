// first import react and the (optional) style file.
import React from "react";
import "./intro.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Line from "../../../elements/Line";

const Intro = (props) => {
  const reduxListItems = [
    "It can be used with every javascript library/framework",
    "Lightweight @ 2Kb including dependencies",
    "Predictable state management",
    "Maintainability due to strict code organisation",
    "Decoupling logic from presentation",
    "Debugging capabilities are excellent",
    "Ability to implement 'time travel'",
    "Easy testing because all functions are Pure",
    "State persistence is a piece of cake",
    "Big commmunity"
  ];

  return (
    <div className="redux__intro">
      <Title type="h1" content="Redux" />
      <Text content="First things first... What is redux?" />
      <Text content="Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test." />
      
      <Title type="h4" content="Why?" />
      <Text content="A question that is asked quite often is... Why redux?" />
      <Text content="So let's address the why with a handy list:" />
      <List type="ul" items={reduxListItems} />
      <Text content="Note that I am not comparing to other technologies and for good reason. While there are other technologies that do state management and do it well, some lack possibilities or are just not mature enough." />
      <Text content="This starters kit uses React Hooks (useState & useEffect) for non-shared component state." />

      <Line className="horizontalline__small"/>
    </div>
  );
};
export default Intro;

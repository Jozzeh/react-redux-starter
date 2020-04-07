// first import react and the (optional) style file.
import React from "react";
import "./intro.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";

const Intro = props => {
  const listItems = [
    "Project folder structure",
    "BEM CSS methodology",
    "State management using Redux",
    "Basic testing with jest"
  ];

  return (
    <div className="intro">
      <Title type="h1" content="Home"/>
      <Text content="This is a starters project. It encompasses some items, such as: "/>
      <List type="ul" items={listItems} />

      <Title type="h2" content="React" />
      <Text content="This project was bootstrapped with 'Create React App' (https://github.com/facebook/create-react-app)." />
      <Title type="h3" content="Available Scripts"/>
      <Text content="npm run start" />
      <Text className="text__small" content="To run this starters kit in development" />
      <Text content="npm run test" />
      <Text className="text__small" content="To test this starters kit" />
      <Text content="npm run build" />
      <Text className="text__small" content="To build a production build" />
      <Text className="text__small" content="Please note that pages can be filled with only elements if blocks are not applicable." />
    </div>
  );
};
export default Intro;

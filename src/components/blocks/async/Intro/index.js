// first import react and the (optional) style file.
import React from "react";
import "./intro.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Line from "../../../elements/Line";
import Panel from "../../../elements/Panel";
import Flex from "../../../elements/Flex";

const Intro = (props) => {
  const navListItems = [
    "Project folder structure",
    "BEM CSS methodology",
    "State management using Redux",
    "Basic testing with jest",
  ];

  return (
    <div className="intro">
      <Title type="h1" content="Home" />
      <Text content="This is a starters project. It encompasses some items, such as: " />
      <List type="ul" items={navListItems} />

      <Title type="h2" content="React" />
      <Text content="This project was bootstrapped with 'Create React App' (https://github.com/facebook/create-react-app)." />
      <Title type="h3" content="Available command-line scripts" />
      <Flex>
        <Panel className="panel__flexed">
          <Title type="h4" content="Development" />
          <Text content="npm run start" />
          <Text
            className="text__small"
            content="To run this starters kit in development"
          />
        </Panel>

        <Panel className="panel__flexed">
          <Title type="h4" content="Testing" />
          <Text content="npm run test" />
          <Text className="text__small" content="To test this starters kit" />
        </Panel>

        <Panel className="panel__flexed">
          <Title type="h4" content="Production" />
          <Text content="npm run build" />
          <Text className="text__small" content="To build a production build" />
        </Panel>
      </Flex>

      <Title type="h4" content="Resetting" />
      <Text html="There is one more command 'npm run reset'. This will reset this starterskit ... Effectively deleting all docs and setting up a fresh project.<br/>Use the command when you are ready to start a new project." />

      <Line className="horizontalline__small"/>
    </div>
  );
};
export default Intro;

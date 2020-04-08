// first import react and the (optional) style file.
import React from "react";
import "./intro.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Line from "../../../elements/Line";
import Link from "../../../elements/Link";
import Panel from "../../../elements/Panel";
import Flex from "../../../elements/Flex";

const Intro = (props) => {
  const navListItems = [
    "Project folder structure",
    "BEM CSS methodology",
    "State management using Redux",
    "Basic testing with jest",
  ];

  const reactListItems = [
    "Functional components",
    "Pure components (where possible)",
    "React hooks (useState, useEffect)",
    "One way data binding",
    "Prop types",
  ];

  const leftPackageListItems = [
    "react",
    "react-dom",
    "react-scripts",
    "react-router",
    "react-router-dom",
    "prop-types",
    "axios",
    "immer",
    "merge",
  ];
  const rightPackageListItems = [
    "react-redux",
    "redux",
    "redux-persist",
    "redux-thunk",
    "redux-logger",
    "@testing-library/jest-dom",
    "@testing-library/react",
    "@testing-library/user-event",
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

      <Line className="horizontalline__small" />
      <Title type="h2" content="React usage" />
      <Text content="The components in this starters kit are build as easy as possible." />
      <List type="ul" items={reactListItems} />

      <Line className="horizontalline__small" />
      <Title type="h2" content="NPM packages" />
      <Text content="This is a list of all packages used wthin this starters kit. All packages are explained throughout this kit." />
      <Flex>
        <div className="div__flexed div__rightborder">
          <List type="ul" items={leftPackageListItems} />
        </div>
        <div className="div__flexed">
          <List type="ul" items={rightPackageListItems} />
        </div>
      </Flex>

      <Title type="h3" content="React" />
      <Text content="Because this kit is started using the 'npx create-react-app' command, the usual react packages are installed." />
      <Link
        target="_blank"
        href="https://reactjs.org/docs/create-a-new-react-app.html"
        content="React, starting a new react app"
      />
      <Text content="The use of functional components is because React has shifted from class-based components towards functional." />
      <Text content="The lifecycle of functional components are done with React hooks, so it was pretty clear we use some React hooks in this starters kit." />
      <Flex>
        <div className="div__flexed">
          <Link
            target="_blank"
            href="https://www.robinwieruch.de/react-function-component"
            content="React functional components"
          />
        </div>
        <div className="div__flexed">
          <Link
            target="_blank"
            href="https://wattenberger.com/blog/react-hooks"
            content="React classes to hooks"
          />
        </div>
      </Flex>

      <Title type="h3" content="Routing" />
      <Text content="In front-end, you need a decent router and react-router is usually used within projects." />
      <Link
        target="_blank"
        href="https://reacttraining.com/react-router/web/guides/quick-start"
        content="React router quick start"
      />

      <Title type="h3" content="Typing" />
      <Text content="Typing is very usefull and this starters kit advices to use typing of props but does not impose typing." />
      <Text content="This kit uses prop-types and not Typescript. Typescript and prop-types are actually not competing libraries since they occupy a different space. Typescript checks type on compile time, where prop-types check type on runtime." />
      <Text content="So why choose prop-types? Well, prop-types is really handy when data comes from external sources such as API's (after compile time) + it's in the official Reacts docs for now." />
      <Link
        target="_blank"
        href="https://reactjs.org/docs/typechecking-with-proptypes.html"
        content="Typing with prop-types"
      />

      <Title type="h3" content="Fetching with axios" />
      <Text content="Axios is an excellent library using fetch in the background but adds some extra error handling." />
      <Link
        target="_blank"
        href="https://www.npmjs.com/package/axios"
        content="Axios npm page"
      />

      <Title type="h3" content="Easy immutability with Immer" />
      <Text content="Immer makes working with immutable state easy. Because state is immutable, one should clone state before making changes... Immer does this for you." />
      <Text content='Winner of the "Breakthrough of the year" React open source award and "Most impactful contribution" JavaScript open source award in 2019.' />
      <Text content="Immer is used in this starters kit in the redux reducers, where state changes are common." />
      <Link
        target="_blank"
        href="https://immerjs.github.io/immer/docs/introduction"
        content="Immer documentation"
      />
      
      <Title type="h3" content="Object merging" />
      <Text content="Merge is used to merge objects. In this kit, it is used when data comes back from external API's." />
      <Link
        target="_blank"
        href="https://immerjs.github.io/immer/docs/introduction"
        content="Merge page"
      />

      
      
      <Text
        className="text__small"
        content="Please note that pages can be filled with only elements if blocks are not applicable."
      />
    </div>
  );
};
export default Intro;

// first import react and the (optional) style file.
import React from "react";
import "./packages.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Link from "../../../elements/Link";
import Flex from "../../../elements/Flex";

const Packages = (props) => {
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
    <div className="packages">
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
        href="https://www.npmjs.com/package/merge"
        content="Merge package"
      />

      <Title type="h3" content="Redux" />
      <Text content="Managing state can be done in a couple of ways. Why Redux is explained on the state page..." />
      <Title type="h3" content="Testing with Jest" />
      <Text content="Jest is the standard unit testing platform installed with react. If needed enzyme or cypress can be added, but this project does impose those testing libraries." />

      <Text
        className="text__small"
        content="Please note that pages can be filled with only elements if blocks are not applicable."
      />
    </div>
  );
};
export default Packages;

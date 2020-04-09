// first import react and the (optional) style file.
import React from "react";
import "./top.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Link from "../../../elements/Link";

const General = (props) => {
  const foldersListItems = [
    "elements",
    "blocks",
    "pages",
    "shared"
  ];

  const elementGuides = [
    "Prop types should be used to check type",
    "Prop types should be used to set default values if necessairy",
    "Event handling is not done in the elements",
    "When using a design system, the elements folder can serve to test new components"
  ];

  return (
    <div id="structure__top" className="structure__top">
      <Title type="h2" content="Components" />
      <Text content="The components folder is very important as its structure is paramount to how a developer can work with this starters kit. Experience has shown that the structure works in several situations." />
      <Text content="The component folder structure can be seen as a light version of atomic design." />
      <Link target="_blank" href="https://bradfrost.com/blog/post/atomic-web-design/" content="Read about atomic design" />
      <Text content="In short, atomic design is a methodology to create design systems. This starter kit introduces a light version to accomodate standalone applications, applications using a library and applications that use a design systems." />
      <Text content="The folder structure is as follows:" />
      <List items={foldersListItems} type="ul"/>

      <Title type="h3" content="shared" />
      <Text content="The shared folder contains component that are shared throughout the application. Example: main navigation, router, initial app component" />

      <Title type="h3" content="pages" />
      <Text content="Pages are the biggest component and it's pretty clear what they are... A page component represents one page in the application. Event handling can be in this component, but usually the events are handled in the blocks-components." />

      <Title type="h3" content="blocks" />
      <Text content="The blocks are a pieces of a page. This can be seen as the molecules & organisms of atomic design. You'll find sections of a web application in this folder. Also the business logic / event handling is usually done in these components." />

      <Title type="h3" content="elements" />
      <Text content="The elements folder contains the smallest components. This can be seen as the atoms of atomic design. You'll find buttons, inputfields, and other small components in this folder. Some guidelines:" />
      <List type="ul" items={elementGuides} />
    </div>
  );
};
export default General;

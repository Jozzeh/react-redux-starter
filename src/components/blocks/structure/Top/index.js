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
    "Event handling is not done in the elements"
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

      <Title type="h3" content="elements" />
      <Text content="The elements folder are the smallest components. This can be seen as the atoms of atomic design. You'll find buttons, inputfields, and other small components in this folder. Some guidelines:" />
      <List type="ul" items={elementGuides} />
    </div>
  );
};
export default General;

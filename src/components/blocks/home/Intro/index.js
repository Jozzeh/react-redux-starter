// first import react and the (optional) style file.
import React from "react";
import "./intro.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";

const Intro = props => {
  const listItems = [
    "React & Redux",
    "Component folder structure",
    "Redux folder structure",
    "Basic testing"
  ];

  return (
    <div className="intro">
      <Title type="h1" content="Home"/>
      <Text content="This is a starters project. It encompasses some items, such as: "/>
      <List type="ul" items={listItems} />
      <Text className="text__small" content="Please note that pages can be filled with only elements if blocks are not applicable."/>
    </div>
  );
};
export default Intro;

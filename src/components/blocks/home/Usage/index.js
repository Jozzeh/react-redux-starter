// first import react and the (optional) style file.
import React from "react";
import "./usage.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";
import Line from "../../../elements/Line";

const Usage = (props) => {
  const reactListItems = [
    "Functional components",
    "Pure components (where possible)",
    "React hooks (useState, useEffect)",
    "One way data binding",
    "Prop types",
  ];

  return (
    <div className="usage">
      <Title type="h2" content="React usage" />
      <Text content="The components in this starters kit are build as easy as possible." />
      <List type="ul" items={reactListItems} />

      <Line className="horizontalline__small" />
    </div>
  );
};
export default Usage;

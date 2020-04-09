// first import react and the (optional) style file.
import React from "react";
import "./general.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import List from "../../../elements/List";

const General = (props) => {
  const foldersListItems = [
    "assets",
    "clients",
    "components",
    "constants",
    "helpers",
    "redux",
  ];

  return (
    <div id="structure__general" className="structure__general">
      <Title type="h1" content="General structure" />
      <Text content="Most of the application can be found in the 'src' folder." />
      <Text content="The src-folder folders:" />
      <List items={foldersListItems} type="ul" />

      <Title type="h2" content="Top structure" />
      <Text content="Most folders in the top structure can be explained in a couple of lines. Look in the files to see the magic in code and remember... If everything makes sense, reset the project by running the 'npm run reset' command." />
      <Text content="Below you find a deeper dive on each folder, starting with the largest... components." />
    </div>
  );
};
export default General;

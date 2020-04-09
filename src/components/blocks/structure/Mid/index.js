// first import react and the (optional) style file.
import React from "react";
import "./mid.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import Panel from "../../../elements/Panel";
import Flex from "../../../elements/Flex";

const Mid = (props) => {

  return (
    <div id="structure__mid" className="structure__mid">
      <Title type="h2" content="Other folders" />
      <Flex>
        <Panel className="div__flexer flex-section__half">
          <Title type="h4" content="assets" />
          <Text content="The assets folder contains font files, images, videos, etcetera... All in their own folder." />

          <Title type="h4" content="clients" />
          <Text content="The calls towards external API's can be found in the clients folder. Seperation is at the discretion of the developer(s)." />
          <Text content="For a deeper dive, have a look at the Async-page." />

          <Title type="h4" content="constant" />
          <Text content="The constants folder contains javascript files with constants. These constants are used throughout the application but do not change." />

        </Panel>
        <Panel className="div__flexer flex-section__half">
          
          <Title type="h4" content="helpers" />
          <Text content="The helpers folder contains helper functions that are used throughout the application (see it as constants but with functions)." />
          <Text content="There is a seperation between middleware and shared functions. Middleware is redux/state-specific whereas shared are functions that are used in a more general sense." />

          <Title type="h4" content="redux" />
          <Text content="The redux folder needs more explaining, but at its top level... the redux folder has 3 subfolders: actions, reducers, store." />
          <Text content="See the state-page for more information." />
        </Panel>
      </Flex>
    </div>
  );
};
export default Mid;

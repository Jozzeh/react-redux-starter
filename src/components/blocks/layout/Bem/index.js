// first import react and the (optional) style file.
import React from "react";
import "./bem.style.css";

import Panel from "../../../elements/Panel";
import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import Link from "../../../elements/Link";

const Bem = props => {
  return (
    <Panel className="bem">
      <Title type="h2" content="BEM methodology (CSS)"/>
      <Text content="To style components, this project uses the BEM methodology. This method
        is complementairy with our folder structure and certain component
        libraries."/>
      <Link href="https://en.bem.info/methodology/" target="_blank" content="More information about BEM"/>
    </Panel>
  );
};
export default Bem;
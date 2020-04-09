// first import react and the (optional) style file.
import React from "react";
import "./bem.style.css";

import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import Link from "../../../elements/Link";

const Bem = props => {
  return (
    <div className="bem">
      <Title type="h1" content="BEM methodology (CSS)"/>
      <Text content="To style components, it is advisable to use the BEM methodology. This method
        is complementairy with the folder structure and certain component libraries."/>
      <Link href="https://en.bem.info/methodology/" target="_blank" content="More information about BEM"/>
      <Text content="This methodology will actually lessen the chance that developers override css by using the same class names." />
      
      <Title type="h2" content="Style @ component level" />
      <Text content="Style files should be put with the component it styles. This makes it easy to find the style of a component." />

      <Title type="h2" content="CSS, LESS, SASS, PostCSS, ..." />
      <Text content="This starters kit is not opinionated on how to write css. Pick your poison, however align with the other members of a team." />
    </div>
  );
};
export default Bem;
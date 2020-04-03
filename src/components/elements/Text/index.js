// first import react and the (optional) style file.
import React from "react";
import "./text_Style.css";

import PropTypes from 'prop-types';

// IS THIS REALLY NECESSAIRY?
// No, but React Native has specific text components...

const Text = props => {
  const { html, content, className, ...rest } = props;

  if (html) {
    return (
      <p
        {...rest}
        className={className ? className : ""}
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    );
  } else if (content) {
    return (
      <p {...rest} className={className ? className : ""}>
        {content}
      </p>
    );
  } else {
    return <p></p>;
  }
};

Text.propTypes = {
  className: PropTypes.string,
  html: PropTypes.string,
  content: PropTypes.string
}

export default Text;

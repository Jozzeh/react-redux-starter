// first import react and the (optional) style file.
import React from "react";
import "./text.style.css";

// IS THIS REALLY NECESSAIRY?
// No, but React Native has specific text components...

const Text = props => {
  const { html, content, className, ...rest } = props;

  if (html) {
    return (
      <p
        {...rest}
        className={className + "text"}
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    );
  } else if (content) {
    return (
      <p {...rest} className={className + "text"}>
        {content}
      </p>
    );
  } else {
    return <p></p>;
  }
};

export default Text;

// first import react and the (optional) style file.
import React from "react";
import "./title.style.css";

import PropTypes from "prop-types";

const Title = (props) => {
  const { type, content, className, ...rest } = props;

  switch (type) {
    case "h3": {
      return (
        <h3 {...rest} className={className}>
          {content}
        </h3>
      );
    }
    case "h2": {
      return (
        <h2 {...rest} className={className}>
          {content}
        </h2>
      );
    }
    case "h1": {
      return (
        <h1 {...rest} className={className}>
          {content}
        </h1>
      );
    }
    default: {
      return (
        <h1 {...rest} className={className}>
          {content}
        </h1>
      );
    }
  }
};

Title.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  type: "h1",
  className: "",
  content:"No content is provided",
};

export default Title;

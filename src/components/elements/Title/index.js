// first import react and the (optional) style file.
import React from "react";
import "./title.style.css";

import PropTypes from 'prop-types';

const Title = props => {
  const { type, html, content, className, ...rest } = props;

  if (content) {
    switch (type) {
      case "h3": {
        return (<h3 {...rest} className={className}>{content}</h3>);
      }
      case "h2": {
        return (<h2 {...rest} className={className}>{content}</h2>);
      }
      case "h1": {
        return (<h1 {...rest} className={className}>{content}</h1>);
      }
      default: {
        return (<h1 {...rest} className={className}>{content}</h1>);
      }
    }
  } else if (html) {
    switch (type) {
      case "h3": {
        return (<h3 {...rest} className={className} dangerouslySetInnerHTML={{"__html": html}}></h3>);
      }
      case "h2": {
        return (<h2 {...rest} className={className} dangerouslySetInnerHTML={{"__html": html}}></h2>);
      }
      case "h1": {
        return (<h1 {...rest} className={className} dangerouslySetInnerHTML={{"__html": html}}></h1>);
      }
      default: {
        return (<h1 {...rest} className={className} dangerouslySetInnerHTML={{"__html": html}}></h1>);
      }
    }
  } else {
    return (<h1>No content provided</h1>);
  }
};

Title.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  html: PropTypes.string,
  className: PropTypes.string
}

Title.defaultProps = {
  type: "h1",
  className: ""
}

export default Title;

// first import react and the (optional) style file.
import React from "react";
import "./title.style.css";

const Title = props => {
  const { type, html, content, className, ...rest } = props;

  switch (type) {
    case "h3" && html: {
      return (<h3 {...rest} className={className + "title"} dangerouslySetInnerHTML={{"__html": html}}></h3>);
    }
    case "h3" && content: {
      return (<h3 {...rest} className={className + "title"}>{content}</h3>);
    }
    case "h2" && html: {
      return (<h2 {...rest} className={className + "title"} dangerouslySetInnerHTML={{"__html": html}}></h2>);
    }
    case "h2" && content: {
      return (<h2 {...rest} className={className + "title"}>{content}</h2>);
    }

    case "h1" && html: {
      return (<h1 {...rest} className={className + "title"} dangerouslySetInnerHTML={{"__html": html}}></h1>);
    }
    default: {
      return (<h1 {...rest} className={className + "title"}>{content}</h1>);
    }
  }
};

export default Title;

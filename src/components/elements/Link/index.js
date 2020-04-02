// first import react and the (optional) style file.
import React from "react";
import "./link.style.css";

const Link = props => {
  const { target, url, content, className, ...rest } = props;

  return (
    <a
      {...rest}
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className={className + " link"}
    >
      {content}
    </a>
  );
};

export default Link;

// first import react and the (optional) style file.
import React from "react";
import "./link.style.css";

import PropTypes from 'prop-types';

const Link = props => {
  const { target, href, content, className, ...rest } = props;

  return (
    <a
      {...rest}
      href={href}
      target={target ? target : "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className={className ? className + " link" : "link"}
    >
      {content}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string
}

export default Link;

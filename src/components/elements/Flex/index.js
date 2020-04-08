// first import react and the (optional) style file.
import React from "react";
import "./flex.style.css";

import PropTypes from 'prop-types';

const Flex = props => {
  const { className, ...rest } = props;

  return (
    <section className={className + " flex-section"} {...rest}>
      {props.children}
    </section>
  )
};

Flex.propTypes = {
  className: PropTypes.string,
}

Flex.defaultProps = {
  className: ""
}

export default Flex;

// first import react and the (optional) style file.
import React from "react";
import "./panel.style.css";

import PropTypes from 'prop-types';

const Panel = props => {
  const { className, ...rest } = props;

  return (
    <section className={className + " panel"} {...rest}>
      {props.children}
    </section>
  )
};

Panel.propTypes = {
  className: PropTypes.string,
}

Panel.defaultProps = {
  className: ""
}

export default Panel;

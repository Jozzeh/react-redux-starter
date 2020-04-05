// first import react and the (optional) style file.
import React from "react";
import "./label.style.css";

import PropTypes from 'prop-types';

const label = props => {
  const { labelFor, className, ...rest } = props;

  return (
    <label htmlFor={labelFor} className={className + " label"} {...rest}>
      {props.children}
    </label>
  )
};

label.propTypes = {
  className: PropTypes.string,
  labelFor: PropTypes.string,
}

label.defaultProps = {
  className: "",
  labelFor: "",
}

export default label;

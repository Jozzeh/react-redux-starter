// first import react and the (optional) style file.
import React from "react";
import "./form.style.css";

import PropTypes from 'prop-types';

const Form = props => {
  const { className, ...rest } = props;

  const handleSubmit = event => {
    props.onSubmit();
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={className + " form"} {...rest}>
      {props.children}
    </form>
  )
};

Form.propTypes = {
  className: PropTypes.string,
}

Form.defaultProps = {
  className: ""
}

export default Form;

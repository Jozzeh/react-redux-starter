// first import react and the (optional) style file.
import React from "react";
import "./inputfield.style.css";

import PropTypes from 'prop-types';

const Inputfield = props => {
  const { type, inputValue, onChange, inputId, placeholder, size, disabled, explanation, ...rest } = props;

  const classNames = ["inputfield", size];
  if (disabled) {
    classNames.push("inputfield__disabled");
  }

  const handleChange = event => {
    props.onChange(event.target.value);
  }
  
  return (
    <>
      <input value={inputValue} id={inputId} onChange={handleChange} disabled={disabled} type={type} placeholder={placeholder} className={classNames.join(" ")} {...rest}/>
      <span className="inputfield__explanation">{explanation}</span>
    </>
  )
};

Inputfield.propTypes = {
  className: PropTypes.string,
  inputId: PropTypes.string,
  explanation: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "color",
    "date",
    "email",
    "url",
  ]).isRequired,
  onChange: PropTypes.func,
}

Inputfield.defaultProps = {
  inputId: "",
  disabled: false,
  placeholder: "",
  type: "text"
}

export default Inputfield;

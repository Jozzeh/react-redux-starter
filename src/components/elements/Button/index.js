// first import react and the (optional) style file.
import React from "react";
import "./button.style.css";

import PropTypes from "prop-types";

const Button = props => {
  const { color, size, disabled, fluid, icon, onClick, clickValue, ...rest } = props;

  const classNames = ["btn", size, color];
  if (disabled) {
    classNames.push("btn__disabled");
  }
  if (fluid) {
    classNames.push("btn__fluid");
  }

  function handleClick(value) {
    props.onClick(value);
  }

  return (
    <button
      disabled={disabled}
      className={classNames.join(" ")}
      onClick={() => handleClick(clickValue)}
      {...rest}
    >
      {icon ? <img src={icon} alt="" /> : ""} {props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Defines the button color, can be `btn__primary`, `btn__accent`, `btn__success`, `btn__danger`
   */
  color: PropTypes.oneOf([
    "btn__primary",
    "btn__accent",
    "btn__success",
    "btn__danger"
  ]),
  /**
   * Defines the button's size, can be `btn__small`, `btn__medium`, `btn__large`
   */
  size: PropTypes.oneOf(["btn__small", "btn__medium", "btn__large"]),
  /**
   * Disables the button
   */
  disabled: PropTypes.bool,
  /**
   * Makes the button completely fluid (full width)
   */
  fluid: PropTypes.bool,
  /**
   * Attaches a callback to the 'click' event
   */
  onClick: PropTypes.func,
  /**
   * return a value from this button when it is clicked...
   */
  clickValue: PropTypes.any,
  /**
   * Shows an icon, you can pass both a valid Icon component name prop or the instance of an Icon component
   */
  icon: PropTypes.string
};

Button.defaultProps = {
  color: "btn__color",
  size: "btn__medium",
  fluid: false,
  disabled: false,
  icon: undefined,
  clickValue: "",
  onClick: null
};

export default Button;

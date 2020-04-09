// first import react and the (optional) style file.
import React from "react";
import "./quicknav.style.css";

import PropTypes from "prop-types";

// IS THIS REALLY NECESSAIRY?
// No, but React Native has specific text components...

const Quicknav = (props) => {
  const { items, className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      {items.map((element, index) => {
        return (
          <a key={index} href={"#" + element.id}>
            {element.content}
          </a>
        );
      })}
    </div>
  );
};

Quicknav.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.oneOf([
    "quicknav__inline",
    "quicknav__inline-fixed",
    "quicknav__block",
    "quicknav__block-fixed",
  ]),
};

Quicknav.defaultProps = {
  className: "quicknav__inline",
};

export default Quicknav;

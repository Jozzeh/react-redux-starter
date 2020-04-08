// first import react and the (optional) style file.
import React from "react";
import "./line.style.css";

import PropTypes from "prop-types";

const Line = (props) => {
  const { parentClassName, className, ...rest } = props;

  return (
    <div className={parentClassName + "horizontalparent"}>
      <hr className={className + " horizontalline"} {...rest} />
    </div>
  );
};

Line.propTypes = {
  className: PropTypes.string,
  parentClassName: PropTypes.string,
};

Line.defaultProps = {
  className: "",
  parentClassName: "",
};

export default Line;

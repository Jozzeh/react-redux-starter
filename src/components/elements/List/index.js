// first import react and the (optional) style file.
import React from "react";
import "./list.style.css";

import PropTypes from 'prop-types';

import ListItem from "./listItem";

const List = props => {
  const { items, type, className, ...rest } = props;

  if (Array.isArray(items)) {
    if (type === "ol") {
      return (
        <ol className={className ? className + " ordened-list" : "ordened-list"} {...rest}>
          {items.forEach((element, index) => {
            return <ListItem key={index} content={element} />;
          })}
        </ol>
      );
    } else {
      return (
        <ul className={className ? className + " unordened-list" : "unordened-list"} {...rest}>
          {items.map((element, index) => {
            return <ListItem key={index} content={element} />;
          })}
        </ul>
      );
    }
  } else {
    return <p>No items are defined...</p>;
  }
};

List.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default List;

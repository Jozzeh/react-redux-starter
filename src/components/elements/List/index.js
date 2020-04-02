// first import react and the (optional) style file.
import React from "react";
import "./list.style.css";

import ListItem from "./listitem";

const List = props => {
  const { items, itemClassName, type, className, ...rest } = props;

  if (Array.isArray(items)) {
    if (type === "ol") {
      return (
        <ol className={className + " ordened-list list"} {...rest}>
          {items.forEach((element, index) => {
            return <ListItem key={index} content={element} />;
          })}
        </ol>
      );
    } else {
      return (
        <ul className={className + " unordened-list list"} {...rest}>
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

export default List;

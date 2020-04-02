// first import react and the (optional) style file.
import React from "react";
import "./list.style.css";

const ListItem = props => {
  const { content } = props;
  return <li className="list__item">{content}</li>;
};

export default ListItem;

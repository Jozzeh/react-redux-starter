// first import react and the (optional) style file.
import React from "react";
import "./listItem_Style.css";

import PropTypes from 'prop-types';

const ListItem = props => {
  const { content } = props;
  return <li className="list__item">{content}</li>;
};

ListItem.propTypes = {
  content: PropTypes.string.isRequired
}

export default ListItem;

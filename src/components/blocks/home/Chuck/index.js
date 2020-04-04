// first import react and the (optional) style file.
import React, { useEffect } from "react";
import "./chuck.style.css";

import { connect } from "react-redux";
import ChuckActions from "../../../../redux/actions/chuckActions";

import Panel from "../../../elements/Panel";
import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import Button from "../../../elements/Button";

const Chuck = props => {
  useEffect(() => {
    if(props.quotes.standard === ''){
      props.getRandomQuote()
    }
  }, [props]);

  function handleClick(value) {
    props.getRandomQuote();
  }

  return (
    <Panel className="chuck">
      <Title type="h2" content="Redux async API call"/>
      <Text content="Here's a chuck norris quote to brighten your day..."/>
      <Text className="text__small" content="+ it shows how an API call is made using redux thunk + actions and reducers..."/>
      <Text className="text__quote" html={props.quotes.standard}/>
      <Button color="btn__primary" onClick={value => handleClick(value)}>Load a new quote</Button> 
    </Panel>
  );
};

const mapStateToProps = state => {
  return {
    ...state.ChuckReducer
  };
};

const mapDispatchToProps = dispatch => ({
  getRandomQuote: () => dispatch(ChuckActions.getRandomQuote()),
  getSpecificQuote: (firstname, lastname) => dispatch(ChuckActions.getSpecificQuote(firstname, lastname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chuck);
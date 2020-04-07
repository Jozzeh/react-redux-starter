// first import react and the (optional) style file.
import React, { useEffect, useState } from "react";
import "./chuck.style.css";

import { connect } from "react-redux";
import ChuckActions from "../../../../redux/actions/chuckActions";

import Panel from "../../../elements/Panel";
import Title from "../../../elements/Title";
import Text from "../../../elements/Text";
import Form from "../../../elements/Form";
import Button from "../../../elements/Button";
import Label from "../../../elements/Label";
import Inputfield from "../../../elements/Inputfield";

const Chuck = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    if (props.quotes.standard === "") {
      props.getRandomQuote();
    }
  }, [props]);

  const handleClick = (value) => {
    props.getRandomQuote();
  };
  const handleFormSubmit = () => {
    props.getSpecificQuote(firstname, lastname);
  };

  return (
    <Panel className="chuck">
      <Title type="h2" content="Redux async API call" />
      <Text content="Here's a chuck norris quote to brighten your day..." />
      <Text
        className="text__small"
        content="+ it shows how an API call is made using redux thunk + actions and reducers..."
      />
      <Text className="text__quote" html={props.quotes.standard} />
      <Button
        content="Load a new random quote"
        type="button"
        color="btn__primary"
        onClick={(value) => handleClick(value)}
      />
      <Form onSubmit={() => handleFormSubmit()}>
        <section className="flex-section">
          <div className="flex-section__half">
            <Label labelFor="firstname">First name</Label>
            <Inputfield
              size="inputfield_medium"
              inputId="firstname"
              inputValue={firstname}
              onChange={(value) => setFirstname(value)}
            />
          </div>
          <div className="flex-section__half">
            <Label labelFor="lastname">Last name</Label>
            <Inputfield
              size="inputfield_medium"
              inputId="lastname"
              inputValue={lastname}
              onChange={(value) => setLastname(value)}
            />
          </div>
        </section>
        <Button
          content="Load a quote with the name above"
          type="form"
          color="btn__primary"
          onClick={() => handleFormSubmit()}
        />
      </Form>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.ChuckReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getRandomQuote: () => dispatch(ChuckActions.getRandomQuote()),
  getSpecificQuote: (firstname, lastname) =>
    dispatch(ChuckActions.getSpecificQuote(firstname, lastname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chuck);

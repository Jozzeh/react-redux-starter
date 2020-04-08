// first import react and the (optional) style file. 
import React from "react";

// second, import the packages that are installed through npm
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../redux/store/store";

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Router>

          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Index from "./topStories";
import store from "./infra/store";

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);

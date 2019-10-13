import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./infra/store";
import { Header } from "./header";
import TopStories from "./stories/Top";
import { AskStories } from "./stories/Ask";
import ShowStories from "./stories/Show";
import { JobsStories } from "./stories/Jobs";
import Pagination from "./pagination";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <TopStories />
          </Route>
          <Route path="/ask">
            <AskStories />
          </Route>
          <Route path="/show">
            <ShowStories />
          </Route>
          <Route path="/jobs">
            <JobsStories />
          </Route>
        </Switch>
        <Pagination />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

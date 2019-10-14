import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./infra/store";
import { Header } from "./header";
import { Stories } from "./stories";
import {
  FETCH_ASK_STORY,
  FETCH_JOBS_STORY,
  FETCH_SHOW_STORY,
  FETCH_TOP_STORY
} from "./stories/action";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Stories
              key="topStories"
              actionType={FETCH_TOP_STORY}
              id="topStories"
            />
          </Route>
          <Route path="/ask">
            <Stories
              key="askStories"
              actionType={FETCH_ASK_STORY}
              id="askStories"
            />
          </Route>
          <Route path="/show">
            <Stories
              key="showStories"
              actionType={FETCH_SHOW_STORY}
              id="showStories"
            />
          </Route>
          <Route path="/jobs">
            <Stories
              key="jobStories"
              actionType={FETCH_JOBS_STORY}
              id="jobStories"
            />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { connect } from "react-redux";
import { getShowStoriesEpic } from "./action";
import { action } from "../infra/dispatch";
import { SHOW_INITIAL_STORIES } from "../pagination/action";

class ShowStories extends React.Component {
  componentDidMount() {
    const { dispatch, page, showStories } = this.props;

    dispatch(action(SHOW_INITIAL_STORIES));

    if (!showStories.length) {
      dispatch(getShowStoriesEpic(page));
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, page } = this.props;

    if (page !== prevProps.page) {
      dispatch(getShowStoriesEpic(page));
    }
  }

  render() {
    const { showStories } = this.props;
    return (
      <ul>
        {showStories &&
          showStories.map(({ url, title, by, id, score, time, kids = [] }) => (
            <li key={id}>
              <a href={url}>{title}</a>
              <div>
                {score} by {by} {time} ago |{" "}
                {kids.length ? <span>{kids.length} comments</span> : null}
              </div>
            </li>
          ))}
      </ul>
    );
  }
}

export default connect(({ topStoriesState, pageState }) => ({
  ...topStoriesState,
  ...pageState
}))(ShowStories);

import React from "react";
import { connect } from "react-redux";
import { getTopStoriesEpic } from "./action";
import { action } from "../infra/dispatch";
import { SHOW_INITIAL_STORIES } from "../pagination/action";

class TopStories extends React.Component {
  componentDidMount() {
    const { dispatch, page, topStories } = this.props;

    dispatch(action(SHOW_INITIAL_STORIES));

    if (!topStories.length) {
      dispatch(getTopStoriesEpic(page));
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, page } = this.props;

    if (page !== prevProps.page) {
      dispatch(getTopStoriesEpic(page));
    }
  }

  render() {
    const { topStories } = this.props;
    return (
      <ul>
        {topStories &&
          topStories.map(({ url, title, by, id, score, time, kids = [] }) => (
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
}))(TopStories);

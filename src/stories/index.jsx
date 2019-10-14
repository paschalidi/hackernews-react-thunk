import React from "react";
import { connect } from "react-redux";
import { getStoriesEpic } from "./epic";

class StoriesComponent extends React.Component {
  componentDidMount() {
    const { dispatch, id, stories, actionType } = this.props;

    if (!stories[id].length) {
      dispatch(getStoriesEpic(actionType, id));
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, id, actionType } = this.props;

    if (prevProps.id !== id) {
      dispatch(getStoriesEpic(actionType, id));
    }
  }

  render() {
    const { stories, id } = this.props;
    return (
      <ul>
        {stories[id] &&
          Object.values(stories[id]).map(
            ({ url, title, by, id, score, time, kids = [] }) => (
              <li key={id}>
                <a href={url}>{title}</a>
                <div>
                  {score} by {by} {time} ago
                  {kids.length ? <span> | {kids.length} comments</span> : null}
                </div>
              </li>
            )
          )}
      </ul>
    );
  }
}

export const Stories = connect(({ storiesState }) => storiesState)(
  StoriesComponent
);

import React from "react";
import { connect } from "react-redux";
import { getStoriesEpic } from "./epic";
import { ShowMore } from "../showMore";

class StoriesComponent extends React.Component {
  componentDidMount() {
    const { dispatch, id, stories, actionType, pages } = this.props;
    if (!stories[id].length) {
      dispatch(getStoriesEpic(actionType, id, pages[id]));
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, id, actionType, pages } = this.props;

    if (prevProps.id !== id) {
      dispatch(getStoriesEpic(actionType, id, pages[id]));
    }

    if (prevProps.pages[id] !== pages[id]) {
      dispatch(getStoriesEpic(actionType, id, pages[id]));
    }
  }

  render() {
    const { stories, id } = this.props;
    return (
      <React.Fragment>
        <ul>
          {stories[id] &&
            Object.values(stories[id]).map(
              ({ url, title, by, id, score, time, kids = [] }) => (
                <li key={id}>
                  <a href={url}>{title}</a>
                  <div>
                    {score} by {by} {time} ago
                    {kids.length ? (
                      <span> | {kids.length} comments</span>
                    ) : null}
                  </div>
                </li>
              )
            )}
        </ul>
        <ShowMore id={id} />
      </React.Fragment>
    );
  }
}

export const Stories = connect(({ storiesState, pageState }) => ({
  ...storiesState,
  pages: pageState
}))(StoriesComponent);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStoriesEpic } from "./epic";
import { ShowMore } from "../showMore";
import {
  FETCH_ASK_STORY,
  FETCH_JOBS_STORY,
  FETCH_SHOW_STORY,
  FETCH_TOP_STORY
} from "./action";

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
              ({ url, title, by, id: storyId, score, time, kids = [] }) => (
                <li key={storyId}>
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
StoriesComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.oneOf(["topStories", "jobStories", "askStories", "showStories"])
    .isRequired,
  actionType: PropTypes.oneOf([
    FETCH_TOP_STORY,
    FETCH_ASK_STORY,
    FETCH_JOBS_STORY,
    FETCH_SHOW_STORY
  ]).isRequired,
  pages: PropTypes.shape({
    topStories: PropTypes.number.isRequired,
    showStories: PropTypes.number.isRequired,
    askStories: PropTypes.number.isRequired,
    jobStories: PropTypes.number.isRequired
  }).isRequired,
  stories: PropTypes.shape({
    topStories: PropTypes.number.isRequired,
    showStories: PropTypes.number.isRequired,
    askStories: PropTypes.number.isRequired,
    jobStories: PropTypes.number.isRequired
  }).isRequired
};

export const Stories = connect(({ storiesState, pageState }) => ({
  ...storiesState,
  pages: pageState
}))(StoriesComponent);

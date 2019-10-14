import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { action } from "../infra/dispatch";
import { SHOW_MORE_STORIES } from "./action";

const ShowMoreComponent = ({ dispatch, id }) => {
  return (
    <button
      type="button"
      onClick={() => dispatch(action(SHOW_MORE_STORIES, id))}
    >
      more stories
    </button>
  );
};

ShowMoreComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.oneOf(["topStories", "jobStories", "askStories", "showStories"])
    .isRequired
};

export const ShowMore = connect()(ShowMoreComponent);

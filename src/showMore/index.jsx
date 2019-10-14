import React from "react";
import { connect } from "react-redux";
import { action } from "../infra/dispatch";
import { SHOW_MORE_STORIES } from "./action";

const ShowMoreComponent = ({ dispatch, id }) => {
  return (
    <button onClick={() => dispatch(action(SHOW_MORE_STORIES, id))}>
      more stories
    </button>
  );
};

export const ShowMore = connect()(ShowMoreComponent);

import React from "react";
import { connect } from "react-redux";
import { action } from "../infra/dispatch";
import { SHOW_MORE_ARTICLES } from "./action";

const Pagination = ({ page, dispatch }) => {
  console.log(page);
  return (
    <div>
      <button onClick={() => dispatch(action(SHOW_MORE_ARTICLES))}>
        more articles
      </button>
    </div>
  );
};

export default connect(({ topStoriesState, pageState }) => ({
  ...topStoriesState,
  ...pageState
}))(Pagination);

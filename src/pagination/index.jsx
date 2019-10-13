import React from "react";
import { connect } from "react-redux";
import { action } from "../infra/dispatch";
import { SHOW_MORE_STORIES } from "./action";

const Pagination = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch(action(SHOW_MORE_STORIES))}>
      more stories
    </button>
  );
};

export default connect()(Pagination);

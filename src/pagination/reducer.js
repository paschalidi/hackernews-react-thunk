import { SHOW_MORE_STORIES, SHOW_INITIAL_STORIES } from "./action";

const initialState = { page: 0 };

const reducer = (state = initialState, { type = null }) => {
  switch (type) {
    case SHOW_MORE_STORIES:
      return { page: state.page + 1 };
    case SHOW_INITIAL_STORIES:
      return { page: 0 };
    default:
      return state;
  }
};

export default reducer;

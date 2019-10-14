import { SHOW_MORE_STORIES, RESET_PAGES } from "./action";

const initialState = {
  topStories: 0,
  showStories: 0,
  askStories: 0,
  jobStories: 0
};

const reducer = (state = initialState, { type = null, data = null }) => {
  switch (type) {
    case SHOW_MORE_STORIES:
      return { ...state, [data]: state[data] + 1 };
    case RESET_PAGES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

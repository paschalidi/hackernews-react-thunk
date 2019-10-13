import { SHOW_MORE_ARTICLES } from "./action";

const initialState = { page: 0 };

const reducer = (state = initialState, { type = null }) => {
  switch (type) {
    case SHOW_MORE_ARTICLES:
      return { page: state.page + 1 };
    default:
      return state;
  }
};

export default reducer;

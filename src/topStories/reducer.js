import { FETCH_STORY, FETCH_STORY_ERROR } from "./action";

const initialState = {
  topStories: [],
  isLoading: true,
  isError: false
};

const reducer = (state = initialState, { type = null, data = null }) => {
  switch (type) {
    case FETCH_STORY:
      return { topStories: [...state.topStories, data] };
    case FETCH_STORY_ERROR:
      return { isError: true };
    default:
      return state;
  }
};

export default reducer;

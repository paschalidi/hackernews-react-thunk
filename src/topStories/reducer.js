import { FETCH_STORY, FETCH_STORY_ERROR } from "./action";

const initialState = {
  topStories: [],
  isLoading: true,
  isError: false
};

const asyncReducer = (
  state = initialState,
  { type = null, data = null, error = null }
) => {
  switch (type) {
    case FETCH_STORY:
      return { topStories: [...state.topStories, data] };
    case FETCH_STORY_ERROR:
      return { isError: true };
    default:
      return state;
  }
};

export default asyncReducer;

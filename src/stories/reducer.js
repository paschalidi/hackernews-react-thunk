import {
  FETCH_SHOW_STORY,
  FETCH_TOP_STORY,
  FETCH_STORY_ERROR,
  FETCH_ASK_STORY,
  FETCH_JOBS_STORY
} from "./action";

const initialState = {
  stories: {
    showStories: {},
    topStories: {},
    askStories: {},
    jobStories: {}
  },
  isLoading: true,
  isError: false
};

const reducer = (state = initialState, { type = null, data = null }) => {
  console.log(data)
  switch (type) {
    case FETCH_TOP_STORY:
      return {
        ...state,
        stories: {
          ...state.stories,
          topStories: { ...state.stories.topStories, [data.id]: data }
        }
      };
    case FETCH_SHOW_STORY:
      return {
        ...state,
        stories: {
          ...state.stories,
          showStories: { ...state.stories.showStories, [data.id]: data }
        }
      };
    case FETCH_ASK_STORY:
      return {
        ...state,
        stories: {
          ...state.stories,
          askStories: { ...state.stories.askStories, [data.id]: data }
        }
      };
    case FETCH_JOBS_STORY:
      return {
        ...state,
        stories: {
          ...state.stories,
          jobStories: { ...state.stories.jobStories, [data.id]: data }
        }
      };
    case FETCH_STORY_ERROR:
      return { isError: true };
    default:
      return state;
  }
};

export default reducer;

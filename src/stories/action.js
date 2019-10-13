import { action, error } from "../infra/dispatch";

export const FETCH_STORY = "FETCH_STORY";
export const FETCH_SHOW_STORY = "FETCH_SHOW_STORY";
export const FETCH_STORY_ERROR = "FETCH_STORY_ERROR";

const API_URL = "https://hacker-news.firebaseio.com";
const STORIES_ON_EACH_PAGE = 20;

const getPageSlice = page => [
  STORIES_ON_EACH_PAGE * page,
  STORIES_ON_EACH_PAGE * page + STORIES_ON_EACH_PAGE
];

export const getTopStoriesEpic = page => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/v0/topstories.json`);
      const topIds = await response.json();

      const [sliceFrom, sliceTo] = getPageSlice(page);

      topIds.slice(sliceFrom, sliceTo).map(async id => {
        const topStoriesResponse = await fetch(`${API_URL}/v0/item/${id}.json`);

        const story = await topStoriesResponse.json();
        dispatch(action(FETCH_STORY, story));
      });
    } catch (e) {
      dispatch(error(FETCH_STORY_ERROR));
    }
  };
};

export const getShowStoriesEpic = page => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/v0/showstories.json`);
      const ids = await response.json();

      const [sliceFrom, sliceTo] = getPageSlice(page);

      ids.slice(sliceFrom, sliceTo).map(async id => {
        const topStoriesResponse = await fetch(`${API_URL}/v0/item/${id}.json`);

        const story = await topStoriesResponse.json();
        dispatch(action(FETCH_SHOW_STORY, story));
      });
    } catch (e) {
      dispatch(error(FETCH_STORY_ERROR));
    }
  };
};

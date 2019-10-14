import { action, error } from "../infra/dispatch";
import { FETCH_STORY_ERROR } from "./action";

const API_URL = "https://hacker-news.firebaseio.com";
const STORIES_ON_EACH_PAGE = 20;

const getPageSlice = page => [
  STORIES_ON_EACH_PAGE * page,
  STORIES_ON_EACH_PAGE * page + STORIES_ON_EACH_PAGE
];

export const getStoriesEpic = (actionType, id, page = 0) => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/v0/${id.toLowerCase()}.json`);
      const storyIdentifiers = await response.json();
      console.log(storyIdentifiers)

      const [sliceFrom, sliceTo] = getPageSlice(page);

      storyIdentifiers.slice(sliceFrom, sliceTo).map(async id => {
        const storyResponse = await fetch(`${API_URL}/v0/item/${id}.json`);

        const story = await storyResponse.json();
        dispatch(action(actionType, story));
      });
    } catch (e) {
      dispatch(error(FETCH_STORY_ERROR));
    }
  };
};

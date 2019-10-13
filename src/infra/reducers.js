import { combineReducers } from "redux";
import topStoriesState from "../topStories/reducer";
import pageState from "../pagination/reducer";

export const rootReducer = combineReducers({ topStoriesState, pageState });

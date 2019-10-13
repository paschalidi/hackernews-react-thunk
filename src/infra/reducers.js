import { combineReducers } from "redux";
import topStoriesState from "../stories/reducer";
import pageState from "../pagination/reducer";

export const rootReducer = combineReducers({ topStoriesState, pageState });

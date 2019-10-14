import { combineReducers } from "redux";
import storiesState from "../stories/reducer";
import pageState from "../showMore/reducer";

export const rootReducer = combineReducers({ storiesState, pageState });

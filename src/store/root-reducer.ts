import { combineReducers } from "@reduxjs/toolkit";

import searchRobotsReducer from "./robot-slice";
import requestRobotsReducer from "./request-robots";

// combine the reducers
export const rootReducer = combineReducers({
    search: searchRobotsReducer,
    robots: requestRobotsReducer
});
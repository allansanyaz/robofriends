import { RootState } from "./store";
import { IRobotState } from "./request-robots";
import { ISearchRobots } from "./robot-slice";

export const searchSelector = (state: RootState): ISearchRobots => state.search;
export const robotsSelector = (state: RootState): IRobotState => state.robots;
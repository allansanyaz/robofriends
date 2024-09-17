import { createSlice } from "@reduxjs/toolkit";

export interface ISearchRobots {
    searchField: string;
}

const initialState = {
    searchField: '',
} as ISearchRobots;

export const searchRobotsSlice = createSlice({
    name: 'searchRobots',
    initialState,
    reducers: {
        searchRobots: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

// export the actions for the search field change
export const { searchRobots } = searchRobotsSlice.actions;

// export the reducer for the index and the store
export default searchRobotsSlice.reducer;
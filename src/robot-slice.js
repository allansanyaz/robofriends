import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchField: '',
}

export const searchRobotsSlice = createSlice({
    name: 'searchRobots',
    initialState,
    reducers: {
        CHANGE_SEARCHFIELD: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

// export the actions for the search field change
// export const { searchRobots } = searchRobotsSlice.actions;

// export the reducer for the index and the store
export default searchRobotsSlice.reducer;

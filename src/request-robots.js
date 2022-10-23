import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create the thunk to request the data
export const requestRobots = createAsyncThunk(
    'robots/requestRobots',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        // return the response
        return response
    }
);

// default the state
const initialState = {
    robots: [],
    error: '',
    isPending: false
}

// robot request slice
const requestRobotsSlice = createSlice({
    name: 'requestRobots',
    initialState,
    reducers: {},
    extraReducers: {
        [requestRobots.pending]: (state, action) => {
            state.isPending = true;
        },
        [requestRobots.fulfilled]: (state, action) => {
            state.isPending = false;
            state.robots = action.payload;
        },
        [requestRobots.rejected]: (state, action) => {
            state.error = action.payload;
            state.isPending = false;
        }
    }
});

// the export of the action is not neccessary, we export the createAsyncThunk instead

export default requestRobotsSlice.reducer;

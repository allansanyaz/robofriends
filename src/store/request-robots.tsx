import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";

export interface IRobotData {
    id: number;
    name: string;
    username?: string;
    email: string;
}

// create the thunk to request the data
export const requestRobots = createAsyncThunk(
    'robots/requestRobots',
    async (url: string) => {
        const response = await fetch(url)
        .then(data => data.json())
        // return the response
        return response as IRobotData[];
    }
);

export interface IRobotState {
    robots: IRobotData[];
    error?: string | null | SerializedError;
    isPending?: boolean;
}

// default the state
const initialState = {
    robots: [],
    error: null,
    isPending: false
} as IRobotState;

// robot request slice
const requestRobotsSlice = createSlice({
    name: 'requestRobots',
    initialState,
    reducers: {
        setRobots: (state, action) => {
            state.robots = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(requestRobots.pending, (state, action) => {
                state.isPending = true;
            })
            .addCase(requestRobots.fulfilled, (state, action) => {
                state.isPending = false;
                state.robots = action.payload;
            })
            .addCase(requestRobots.rejected, (state, action) => {
                state.error = (action.payload) ? action.payload : action.error;
                state.isPending = false;
            })
    }
});

// the export of the action is not neccessary, we export the createAsyncThunk instead
export const { setRobots } = requestRobotsSlice.actions;

export default requestRobotsSlice.reducer;

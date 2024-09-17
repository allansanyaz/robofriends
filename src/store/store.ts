import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import searchRobotsReducer from './robot-slice';
import requestRobotsReducer from './request-robots';

// create logger
// create Store

const store = configureStore({
    reducer: {
        search: searchRobotsReducer,
        robots: requestRobotsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// only call hooks in components
// export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
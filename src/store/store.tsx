import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// import { useDispatch } from 'react-redux';
import searchRobotsReducer from '../store/robot-slice';
import requestRobotsReducer from '../store/request-robots';

// create logger
const logger = createLogger();
// create Store

const store = configureStore({
    reducer: {
        search: searchRobotsReducer,
        robots: requestRobotsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// only call hooks in components
// export const useAppDispatch: () => AppDispatch = useDispatch

export default store;

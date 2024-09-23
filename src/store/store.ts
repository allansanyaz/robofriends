import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { rootReducer } from './root-reducer';
import { createLogger } from 'redux-logger';

// create logger
const logger = createLogger({

});

// check to see if we are in production mode or development
const isProduction = process.env.NODE_ENV === 'production';

// create Store
export const setupStore = (preloadedState: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => {
            return (!isProduction) ? getDefaultMiddleware().concat() : getDefaultMiddleware();
        }
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
// only call hooks in components
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppStore = ReturnType<typeof setupStore>
// initialize the store
const store: AppStore = setupStore({});
// export the store
export default store;
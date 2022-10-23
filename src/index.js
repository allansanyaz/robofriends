import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import searchRobotsReducer from './robot-slice';
import requestRobotsReducer from './request-robots';

// create logger
const logger = createLogger();
// create Store

const store = configureStore({
    reducer: {
        searchRobots: searchRobotsReducer,
        requestRobots: requestRobotsReducer
    }
}, logger);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from "@jest/globals";
import RobotsReducer, { searchRobots, ISearchRobots } from 'store/robot-slice';
import RobotSliceReducer, { setRobots, IRobotData } from 'store/request-robots';
import { userData } from 'utils/dummy.data';
import { searchSelector, robotsSelector } from 'store/selectors';
import { CombinedState } from 'redux';

test('Testing the search robots reducer', () => {
    const initialState = {
        searchField: 'test',
    };

    expect(RobotsReducer(initialState, searchRobots('test'))).toEqual({
        searchField: 'test',
    });

});


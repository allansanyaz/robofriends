import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

import { setSearchField, requestRobots } from "../actions";

const App = () => {

    const [count, setCount] = useState(0);
    // redux state here using hooks define the selector which is equivalent to mapStateToProps
    const searchField = useSelector(state => state.searchRobots.searchField);
    const robots = useSelector(state => state.requestRobots.robots);
    const isPending = useSelector(state => state.requestRobots.isPending);
    const error = useSelector(state => state.requestRobots.error);

    // redux dispatch here using hooks, dispatch is equivalent to mapDispatchToProps
    const dispatch = useDispatch();
    const onSearchChange = (event) => {dispatch({type: 'CHANGE_SEARCHFIELD', payload: event.target.value})};
    const onRequestRobots = () => dispatch(requestRobots());
    
    useEffect(() => {

        onRequestRobots();

    }, []); // only run the effect if count changes

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (isPending) ? 
        <h1>Loading</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={() => setCount(count + 1)}>Click Me!</button><br/><br/>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={ filteredRobots } />
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default App;
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import { requestRobots } from "../request-robots";

const App = () => {

    const [count, setCount] = useState(0);
    // redux state here using hooks define the selector which is equivalent to mapStateToProps
    const { searchField }= useSelector(state => state.searchRobots);
    const { robots, isPending, error } = useSelector(state => state.requestRobots);

    // redux dispatch here using hooks, dispatch is equivalent to mapDispatchToProps
    const dispatch = useDispatch();
    // to handle the events of search changes
    const onSearchChange = (event) => {dispatch({type: 'searchRobots/CHANGE_SEARCHFIELD', payload: event.target.value})};
    // handling the requests of the data
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
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../components/card.list";
import SearchBox from "../components/searchbox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/errorboundary";
import './App.css';
import { requestRobots } from "../store/request-robots";
import { searchRobots } from "../store/robot-slice";
import { searchSelector, robotsSelector } from "../store/selectors";
import { AppDispatch } from "../store/store";
import { IRobotData } from "../store/request-robots";

const App = () => {

    // redux state here using hooks define the selector which is equivalent to mapStateToProps
    const { robots, isPending, error } = useSelector(robotsSelector);
    const { searchField } = useSelector(searchSelector);
    const [filteredRobots, setFilteredRobots] = useState<IRobotData[]>(robots);
    
    // redux dispatch here using hooks, dispatch is equivalent to mapDispatchToProps
    // type it to typescript
    const dispatch: AppDispatch = useDispatch();
    // to handle the events of search changes
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(searchRobots(event.target.value))
    };
    // handling the requests of the data
    
    useEffect(() => {
        dispatch(requestRobots('https://jsonplaceholder.typicode.com/users'));
    }, []); // only run the effect if count changes

    useEffect(() => {
        setFilteredRobots(robots);
    }, [isPending]);

    
    useEffect(() => {
        const searchedRobots = robots.filter((robot: IRobotData) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        // set the filtered robots
        setFilteredRobots(searchedRobots);

    },[searchField]);
    
    return (
        (isPending) ? 
        <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default App;
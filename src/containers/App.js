import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

// STATE >> PROPS
// PROPS: the properties that we have passed down from parent to children.These some out of STATE. So props feed state to child
// STATE: the memory of our app, communication. The description of the App and an object describing it.
        // State is the robot and whatever is entered in the search box
// Children: Used to render children

// pure components always receive something and return it
// have to go back to our original way of making components the class and extensions

// const App = () => {
class App extends React.Component {
    // constructor used to call and define the state
    // states can affect our App and they reside in the parent component
    // if they have a state they are smart components
    constructor() {
        // call super class of ReactComponent
        // JSON placeholder URL: http://jsonplaceholder.typicode.com/users
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount = () => {
        // fetch the JSON from somewhere then return the response JSON then set the state
        // seems like then can actually chain commands together
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        // the below is a bundle REACT method the state will not be 
        // this.state.searchfield = event.target.value
        this.setState({ searchfield: event.target.value});
    }

    // classes always have to use render function which returns our view
    render() {
        const { robots, searchfield } = this.state; 
        //moving filtered robots here gives us access to it
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        // if there is a large amount of data to be fetched we could say
        // loading bar here and make requests on component did load

            return (!robots.length) ? 
            <h1>Loading</h1> :
        (
            // filteredRobots now needs to be communicated to the view
            // the error boudary allow us to catch and handle errors accordingly
            //<React.Fragment>
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={ filteredRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
            // App now owns robots and is allowed to change them
            //</React.Fragment>
        )
    }
}

export default App
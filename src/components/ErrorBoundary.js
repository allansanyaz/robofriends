import React, { Component } from "react";

// The class will handle our errors and update the Child accordingly
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <h1>Oops that is not good</h1>
        }
        return this.props.children;

    }
}

export default ErrorBoundary;
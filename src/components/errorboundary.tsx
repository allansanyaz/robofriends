import React, { Component } from "react";

interface IErrorBoundaryState {
    hasError: boolean;
}
interface IErrorBoundaryProps {
    children: React.ReactNode;
}

// The class will handle our errors and update the Child accordingly
class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
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
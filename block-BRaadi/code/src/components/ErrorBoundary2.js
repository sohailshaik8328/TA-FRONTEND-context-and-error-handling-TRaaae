import React, { Component } from 'react'

export default class ErrorBoundary2 extends Component {
    state = {
        hasError : false,
    }

    static getDerivedStateFromError(error) {
        return {hasError :true}
    }
    render() {
        if(this.state.hasError) {
            return <h1>Please reload the page!</h1>
        }
        return (
            this.props.children
        )
    }
}

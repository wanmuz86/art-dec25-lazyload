import React, { Component, type ReactNode } from 'react'

// Props data type 
interface ErrorBoundaryProps {
    children:ReactNode
}

// State data type 
interface ErrorBoundaryState  {
    hasError:boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
 
    //IN RCC, the props is retrieved from the constructor
    // In RCC, state is defined in constructor
    constructor(props:ErrorBoundaryProps){
        super(props)
        // Initialize the state to false
        this.state = {hasError:false};

    }

    // state will change 
    static getDerivedStateFromError(): ErrorBoundaryState {
        return {hasError:true};
    }

    // this will be called
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('ErrorBoundary caught an error', error, errorInfo)
    }

  render() {
    // In RCC , the UI is defined in render method
 
        if (this.state.hasError){
            return <div>Something is wrong</div>
        }
        // Return the Component within the Error Boundary
       return this.props.children
    
  }
}
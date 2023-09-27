import React from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {error:null};
    }
    static getDerivedStateFromError(error){
        return {error:error};
    }
    componentDidCatch(error,info){
        // this.setState(error);
        console.log('Error Comes ',error);
    }

    render(){
        if(this.state.error){
            return(<p>Something Went Wrong...!</p>)
        }
        else{
            return this.props.children;
        }
    }
}
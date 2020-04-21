// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // decrement = ()=>{
    //     const timer = this.state.secondsLeft - 1
    //     this.setState({
    //         secondsLeft: timer
    //     })
    // }

    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(
            <div>{message}</div>
        )
    }
}
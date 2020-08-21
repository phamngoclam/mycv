import React from "react";
import './Timer.scss';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        //called when user navigate or render dont have any cmp
        //=> stop setInterval when reload
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date: new Date()});
    }
    
    render() {
        return (
            <div className="timer">
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Timer;

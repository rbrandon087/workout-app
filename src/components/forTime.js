import { clear } from 'console';
import React, { Component } from 'react';

class ForTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: props.totalTime,
            isRunning: false
        };
    }

    updatedTimerDisplay() {
        const { totalTime } = this.state;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    startTimer() {
        if(!this.state.isRunning && this.state.totalTime > 0) {
            this.setState({ isRunning: true })

            this.interval = setInterval(() => {
                const { totalTime } = this.state;

                if(totalTime < 0){
                    clearInterval(this.interval);
                    this.setState({ isRunning: false })
                } else {
                    this.setState({ totalTime: totalTime - 1})
                }
            }, 1000)
        }
    }

    stopTimer() {
        if(this.interval){
            clearInterval(this.interval);
        }
        this.setState({ isRunning: false })
    }

    render() {
        const { isRunning } = this.state;

        return(
            <div>
                <h1>For Time</h1>
                <div id='forTimeTimer'>{this.updatedTimerDisplay}</div>
                <button onClick={() => this.startTimer()} disabled={isRunning}>Start</button>
                <button onClick={() => this.stopTimer()}>Stop</button>
            </div>
        )
    }
}

export default ForTime;
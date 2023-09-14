import React, { Component } from 'react'

class Tabata extends Component{
    constructor(props) {
        super(props);
        this.state = {
            totalTime: props.totalTime,
            isRunning: false,
            isResting: false,
            intervalDuration: props.workDuration,
            restDuration: props.restDuration,
            remainingDuration: props.workDuration,
        };
    }
    
    updatedTimerDisplay() {
        const { isResting, remainingDuration } = this.state;
        const minutes = Math.floor(remainingDuration / 60);
        const seconds = remainingDuration % 60;

        return `${isResting ? 'Work' : 'Rest'}: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    startTimer() {
        if(!this.state.isRunning) {
            this.setState({ isRunning: true });

            const interval = setInterval(() => {
                const { totalTime, isResting, remainingDuration } = this.state;
                this.setState({ totalTime: totalTime + 1, remainingDuration: remainingDuration - 1});

                if (remainingDuration <= 0) {
                    clearInterval(interval);

                    if(isResting) {
                        this.setState({ isResting: false, remainingDuration: this.props.workDuration });
                    } else {
                        this.setState({ isResting: true, remainingDuration: this.props.restDuration });
                    }

                    setTimeout(() => {
                        this.startTimer();
                    }, 1000);
                }
            }, 1000)

            this.setState({ interval })
        }
    }

    stopTimer() {
        const { interval } = this.state;
        if(interval) {
            clearInterval(interval);
        }
        this.setState({ isRunning: false, totalTime: 0, remainingDuration: this.props.workDuration });
    }

    render() {
        const { isRunning } = this.state;

        return (
            <div>
                <h1>Tabata</h1>
                <div id="tabataTimer">{this.updatedTimerDisplay()}</div>
                <button onClick={() => this.startTimer()} disabled={isRunning}>
                    Start
                </button>
                <button onClick={() => this.stopTimer()}>Stop</button>
            </div>
        );
    }
}

export default Tabata;
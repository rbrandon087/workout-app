import React, { Component } from 'react';

class ForTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: 0,
            inputedTotalTime: '',
            isRunning: false,
            isPreparing: false,
            prepDuration: 10,
            prepCountdown: 10
        };
    }

    updatedTimerDisplay() {
        const { totalTime, isPreparing, prepCountdown } = this.state;

        if(isPreparing) {
            if(prepCountdown === 0){
                return this.formatTime(totalTime);
            }
            return `Get Ready!: ${prepCountdown}`;
        }

        return this.formatTime(totalTime);
    }

    formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    handleTotalTimeChange(event) {
        const inputedTotalTime = parseInt(event.target.value, 10);
        this.setState({ inputedTotalTime });
    }

    startTimer() {
        if(!this.state.isRunning && this.state.inputedTotalTime > 0) {
            if(!this.state.isPreparing){
                this.setState({ isPreparing: true, isRunning: true, totalTime: this.state.inputedTotalTime });

                this.prepInterval = setInterval(() => {
                    const { prepCountdown } = this.state;
                    if(prepCountdown <= 0){
                        clearInterval(this.prepInterval);
                        this.startCountdown();
                    } else {
                        this.setState({ prepCountdown: prepCountdown - 1})
                    }
                }, 1000);
            }
        }
    }

    startCountdown() {
        this.interval = setInterval(() => {
            const { totalTime } = this.state;

            if(totalTime <= 0){
                clearInterval(this.interval);
                this.setState({ isRunning: false, isPreparing: false })
            } else {
                this.setState({ totalTime: totalTime - 1})
            }
        }, 1000)
    }

    stopTimer() {
        if(this.prepInterval){
            clearInterval(this.prepInterval);
        }
        if(this.interval){
            clearInterval(this.interval);
        }
        this.setState({ isRunning: false, isPreparing: false });
    }

    render() {
        const { isRunning, isPreparing } = this.state;

        return(
            <div>
                <h1>For Time</h1>
                <div id='forTimeTimer'>{this.updatedTimerDisplay()}</div>
                <input 
                    type='number'
                    placeholder='Enter Total Time (seconds)'
                    value={this.state.inputedTotalTime}
                    onChange={(e) => this.handleTotalTimeChange(e)}
                />
                <button onClick={() => this.startTimer()} disabled={isRunning}>{isPreparing ? 'Get Ready' : 'Start'}</button>
                <button onClick={() => this.stopTimer()}>Stop</button>
            </div>
        )
    }
}

export default ForTime;
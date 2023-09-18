import React, { Component } from 'react'

class Tabata extends Component{
    constructor(props) {
        super(props);
        this.state = {
            totalRounds: this.calculateRounds(props.totalTime),
            currentRound: 0,
            isRunning: false,
            isResting: false,
            intervalDuration: props.workDuration,
            restDuration: props.restDuration,
            remainingDuration: props.workDuration
        };
    }

    handleTotalTimeChange(event) {
        const newTotalTime = parseInt(event.target.value, 10);
        this.setState({ totalTime: newTotalTime, totalRounds: this.calculateRounds(newTotalTime) });
    }

    calculateRounds(totalTime) {
        return Math.floor(totalTime / (this.props.workDuration + this.props.restDuration));
    }
    
    updatedTimerDisplay() {
        const { isResting, remainingDuration, totalRounds, currentRound } = this.state;
        const minutes = Math.floor(remainingDuration / 60);
        const seconds = remainingDuration % 60;

        const phase = isResting ? "Rest" : "Work";

        return(
            <div>
                <div>Total Rounds: {totalRounds}</div>
                <div>Current Round: {currentRound}</div>
                <div>
                    {phase}: {minutes}{seconds < 10 ? '0' : ''}{seconds}
                </div>
            </div>
        )
    }

    startTimer() {
        if(!this.state.isRunning && this.state.totalRounds > 0) {
            const { isResting, intervalDuration, restDuration} = this.state;
            const initialRemainingDuration = isResting ? restDuration : intervalDuration;
            
            this.setState({ isRunning: true, remainingDuration: initialRemainingDuration });

            const interval = setInterval(() => {
                const { 
                totalRounds, 
                isResting, 
                remainingDuration, 
                intervalDuration, 
                restDuration,
                currentRound 
                } = this.state;
                
                const updatedRemainingDuration = remainingDuration - 1

                if (updatedRemainingDuration >= 0) {
                    this.setState({ remainingDuration: updatedRemainingDuration })
                } else {
                    clearInterval(interval);

                    if(isResting) {
                        this.setState({ 
                            isResting: false,
                            remainingDuration: intervalDuration,
                            currentRound: currentRound + 1 
                        }, () => {
                            setTimeout(() => {
                                this.startTimer();
                            }, 500);
                        });
                    } else {
                        this.setState({ 
                            isResting: true,
                            remainingDuration: restDuration 
                        }, () => {
                            setTimeout(() => {
                                this.startTimer();
                            }, 500);
                        });
                    }

                    if(currentRound + 1 < totalRounds){
                        this.setState({ isRunning: false });
                    }
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
        this.setState({ isRunning: false, isResting: false, remainingDuration: this.props.workDuration });
    }

    render() {
        const { isRunning, totalTime } = this.state;

        return (
            <div>
                <h1>Tabata</h1>
                <div id="tabataTimer">{this.updatedTimerDisplay()}</div>
                <input 
                    type="number"
                    placeholder='Enter Total Time (seconds)'
                    defaultValue={totalTime}
                    onChange={(e) => this.handleTotalTimeChange(e)}
                />
                <button onClick={() => this.startTimer()} disabled={isRunning}>
                    Start
                </button>
                <button onClick={() => this.stopTimer()}>Stop</button>
            </div>
        );
    }
}

export default Tabata;
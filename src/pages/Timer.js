import React, { Component } from 'react';
import Tabata from '../components/Tabata';
import ForTime from '../components/ForTime';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDuration: 30,
            restDuration: 30,
            totalDuration: 1200
        };
    }

    render() {
        return(
            <div>
                <Tabata workDuration={this.state.workDuration} restDuration={this.state.restDuration} />
                <ForTime totalTime={this.state.totalDuration} />
            </div>
        )
    }
}

export default Timer;
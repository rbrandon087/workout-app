import React, { Component } from 'react';
import Tabata from '../components/Tabata';
import ForTime from '../components/forTime';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDuration: parseInt(props.location.search.split('=')[1], 10),
            restDuration: parseInt(props.location.search.split('=')[2], 10),
            totalDuration: parseInt(props.location.search.split('=')[3], 10)
        };
    }

    render() {
        return(
            <div>
                <Tabata workDuration={this.state.workDuration} restDuration={this.state.restDuration}/>
            </div>,
            <div>
                <ForTime totalTime={this.state.totalTime} />
            </div>
        )
    }
}

export default Timer;
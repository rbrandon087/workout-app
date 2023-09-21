import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js"
import Tabata from '../components/Tabata';
import ForTime from '../components/ForTime';
import './timer.css'

const supabase = createClient(
    "https://zwcwryojtrkygrslhndl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDuration: 30,
            restDuration: 30,
        };
    }

    render() {
        return(
            <div className='timerWrapper'>
                <Tabata workDuration={this.state.workDuration} restDuration={this.state.restDuration} className='tabata'/>
                <ForTime totalTime={this.state.totalTime} className='fortime'/>
            </div>
        )
    }
}

export default Timer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkoutPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            exercise: '',
            duration: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Create a workout object with the form data
        const workout = {
            date: this.state.date,
            exercise: this.state.exercise,
            duration: this.state.duration,
        };
        // Call a function to add the workout to the calendar
        this.props.addWorkout(workout);
        // Clear the form
        this.setState({
            date: '',
            exercise: '',
            duration: '',
        });
    }

    render() {
        return (
            <div>
                <h2>Add Workout</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="exercise"
                        placeholder="Exercise Type"
                        value={this.state.exercise}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={this.state.duration}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Workout</button>
                </form>
            </div>
        );
    }
}

export default WorkoutPlan;
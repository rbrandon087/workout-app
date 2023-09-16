import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkoutPlan.css";

class WorkoutPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      exercise: "",
      duration: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Split the date input into year, month, and day components
    const [year, month, day] = this.state.date.split("-").map(Number);

    // Create a JavaScript Date object using the parsed components
    const workoutDate = new Date(year, month - 1, day); // Month is zero-based

    // Create a workout object with the parsed date and other form data
    const workout = {
      date: workoutDate,
      exercise: this.state.exercise,
      duration: this.state.duration,
    };

    // Call a function to add the workout to the calendar
    this.props.addWorkout(workout);

    // Clear the form
    this.setState({
      date: "",
      exercise: "",
      duration: "",
    });
  };

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
            style={{
              padding: "10px",
              border: "1px solid pink",
              borderRadius: "4px",
              width: '180px'
            }}
          />
          <input
            type="text"
            name="exercise"
            placeholder="Exercise Type"
            value={this.state.exercise}
            onChange={this.handleChange}
            style={{
              padding: "10px",
              border: "1px solid pink",
              borderRadius: "4px",
              width: '180px'
            }}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={this.state.duration}
            onChange={this.handleChange}
            style={{
              padding: "10px",
              border: "1px solid pink",
              borderRadius: "4px",
              width: '180px'
            }}
          />
          <button className="workout" type="submit">
            Add Workout
          </button>
        </form>
      </div>
    );
  }
}

export default WorkoutPlan;

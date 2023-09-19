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

    const [year, month, day] = this.state.date.split("-").map(Number);

    const workoutDate = new Date(year, month - 1, day);

    const workout = {
      date: workoutDate,
      exercise: this.state.exercise,
      duration: this.state.duration,
    };

    this.props.addWorkout(workout);

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
              border: "1px solid black",
              borderRadius: "4px",
              width: "180px",
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
              border: "1px solid black",
              borderRadius: "4px",
              width: "180px",
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
              border: "1px solid black",
              borderRadius: "4px",
              width: "180px",
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

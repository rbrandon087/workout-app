import Navbar from "../Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import WorkoutPlan from "../components/WorkoutPlan";
import "./plan.css";

class Plan extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
      calendarHTML: "",
      workouts: [], // Store workouts here
    };
  }

  componentDidMount() {
    this.generateCalendar();
  }

  generateCalendar() {
    const { currentDate, workouts } = this.state;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let calendarHTML = '<div class="month">';
    calendarHTML += `<h2>${currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    })}</h2>`;
    calendarHTML += "</div>";

    calendarHTML += '<div class="days">';

    for (let dayLabel of dayLabels) {
      calendarHTML += `<div class="day-label">${dayLabel}</div>`;
    }

    let dayNumber = 1;
    let currentDayOfWeek = firstDayOfMonth.getDay();

    for (let i = 0; i < currentDayOfWeek; i++) {
      calendarHTML += '<div class="empty-cell"></div>';
    }

    while (dayNumber <= daysInMonth) {
      calendarHTML += `<div class="day">${dayNumber}`;

      const workoutsForDay = workouts.filter((workout, index) => {
        const workoutDate = new Date(workout.date);
        return (
          workoutDate.getDate() === dayNumber &&
          workoutDate.getMonth() === month &&
          workoutDate.getFullYear() === year
        );
      });

      if (workoutsForDay.length > 0) {
        calendarHTML += '<ul class="workout-list">';
        workoutsForDay.forEach((workout, index) => {
          calendarHTML += `
                        <li class="workout-item">
                            <div class="workout-exercise">${workout.exercise}</div>
                            <div class="workout-duration">${workout.duration} hours</div>
                        </li>`;
        });
        calendarHTML += "</ul>";
      }

      calendarHTML += "</div>";
      dayNumber++;
      currentDayOfWeek++;

      if (currentDayOfWeek === 7) {
        calendarHTML += '</div><div class="days">';
        currentDayOfWeek = 0;
      }
    }

    while (currentDayOfWeek < 7) {
      calendarHTML += '<div class="empty-cell"></div>';
      currentDayOfWeek++;
    }

    calendarHTML += "</div>";

    this.setState({ calendarHTML });
  }

  goToNextMonth = () => {
    const { currentDate } = this.state;
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    this.setState({ currentDate: nextMonth }, () => {
      this.generateCalendar();
    });
  };

  goToPreviousMonth = () => {
    const { currentDate } = this.state;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    this.setState({ currentDate: previousMonth }, () => {
      this.generateCalendar();
    });
  };

  addWorkout = (workout) => {
    this.setState(
      (prevState) => ({
        workouts: [...prevState.workouts, workout],
      }),
      () => {
        // After adding the workout, regenerate the calendar to display it
        this.generateCalendar();
      }
    );
  };

  //handleDelete = (index) => {
  //   this.setState((prevState) => {
  //        const updatedWorkouts = prevState.workouts.filter((_, i) => i !== index);
  //        return { workouts: updatedWorkouts };
  //    }, () => {
  // After deleting the workout, regenerate the calendar to reflect the changes
  //       this.generateCalendar();
  //    });
  //  }

  render() {
    return (
      <div className="plan">
        <div className="calendar">
          <button className="custom-button" onClick={this.goToPreviousMonth}>
            Previous Month
          </button>
          <button
            className="next-button custom-button"
            onClick={this.goToNextMonth}
          >
            Next Month
          </button>
          <div dangerouslySetInnerHTML={{ __html: this.state.calendarHTML }} />
        </div>
        <div className="workout-form">
          <WorkoutPlan addWorkout={this.addWorkout} />
        </div>
      </div>
    );
  }
}

export default Plan;

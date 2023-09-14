import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WorkoutPlan from '../components/WorkoutPlan';
import './plan.css';

class Plan extends Component {
    constructor() {
        super();
        this.state = {
            currentDate: new Date(),
            calendarHTML: '',
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

        // Calculate the first day of the month and the total days in the month
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // An array to store the day labels
        const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let calendarHTML = '<div class="month">';
        calendarHTML += `<h2>${currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>`;
        calendarHTML += '</div>';

        calendarHTML += '<div class="days">';

        // Add day labels
        for (let dayLabel of dayLabels) {
            calendarHTML += `<div class="day-label">${dayLabel}</div>`;
        }

        // Initialize variables to keep track of the day number and the current day of the week
        let dayNumber = 1;
        let currentDayOfWeek = firstDayOfMonth.getDay();

        // Fill in empty cells before the first day
        for (let i = 0; i < currentDayOfWeek; i++) {
            calendarHTML += '<div class="empty-cell"></div>';
        }

        // Add the day numbers and workouts
        while (dayNumber <= daysInMonth) {
            calendarHTML += `<div class="day">${dayNumber}`;
            
            // Check if there are workouts for this day
            const workoutsForDay = workouts.filter((workout) => {
                const workoutDate = new Date(workout.date);
                return workoutDate.getDate() === dayNumber && workoutDate.getMonth() === month && workoutDate.getFullYear() === year;
            });

            if (workoutsForDay.length > 0) {
                calendarHTML += '<ul>';
                workoutsForDay.forEach((workout) => {
                    calendarHTML += `<li>${workout.exercise} - ${workout.duration} mins</li>`;
                });
                calendarHTML += '</ul>';
            }

            calendarHTML += '</div>';
            dayNumber++;
            currentDayOfWeek++;

            // Start a new row if it's Sunday (7 days in a week)
            if (currentDayOfWeek === 7) {
                calendarHTML += '</div><div class="days">';
                currentDayOfWeek = 0;
            }
        }

        // Fill in empty cells after the last day
        while (currentDayOfWeek < 7) {
            calendarHTML += '<div class="empty-cell"></div>';
            currentDayOfWeek++;
        }

        calendarHTML += '</div>';

        this.setState({ calendarHTML });
    }

    goToNextMonth = () => {
        const { currentDate } = this.state;
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        this.setState({ currentDate: nextMonth }, () => {
            this.generateCalendar();
        });
    }

    goToPreviousMonth = () => {
        const { currentDate } = this.state;
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        this.setState({ currentDate: previousMonth }, () => {
            this.generateCalendar();
        });
    }

    addWorkout = (workout) => {
        // Add the workout to the workouts array
        this.setState((prevState) => ({
            workouts: [...prevState.workouts, workout],
        }), () => {
            // After adding the workout, regenerate the calendar to display it
            this.generateCalendar();
        });
    }

    render() {
        return (
            <div className="plan">
                <div className="calendar">
                    <button onClick={this.goToPreviousMonth}>Previous Month</button>
                    <button className="next-button" onClick={this.goToNextMonth}>Next Month</button>
                    {/* Render the calendar HTML generated in generateCalendar */}
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
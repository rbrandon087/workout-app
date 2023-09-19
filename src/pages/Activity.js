import React from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import './Activity.css'

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

const activities = [
  {
    title: 'Chest',
    content: 'Chest workouts strengthen chest muscles with exercises like bench presses. Warm-up with cardio and stretches to prevent injury.',
    url: 'https://www.youtube.com/watch?v=OKN8dFO_ZLA',
    icon: 'fitness_center', 
  },
  {
    title: 'Back',
    content: 'Back workouts target back muscles with exercises like pull-ups and rows. Warm-up is essential for better performance and effectiveness.',
    url: 'https://www.youtube.com/watch?v=rjrv5VvFyKs',
    icon: 'sports_gymnastics', 
  },
  {
    title: 'Tricep',
    content: 'Tricep workouts strengthen tricep muscles with exercises like dips and pushdowns, emphasizing muscle engagement.',
    url: 'https://www.youtube.com/shorts/8WqaC-AMnmA',
    icon: 'fitness_center', 
  },
  {
    title: 'Bicep',
    content: 'Bicep workouts utilize exercises like curls and hammer curls to enhance bicep development through repetitive motion.',
    url: 'https://www.youtube.com/shorts/mZQWtC579mw',
    icon: 'sports_gymnastics', 
  },
  {
    title: 'Leg',
    content: 'Leg workouts, featuring squats and lunges, build leg strength with a focus on form for safety and effectiveness.',
    url: 'https://www.youtube.com/watch?v=SDAVyMuPah0',
    icon: 'fitness_center', 
  },
];

function Activity() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          {activities.slice(0, 2).map((activity, index) => (
            <div key={index} className="card">
              <i className={`material-icons m-4 ${activity.icon}`}></i>
              <div className="card-body">
                <h2 className="card-title">{activity.title}</h2>
                <p className="card-text">{activity.content}</p>
                <Link to={activity.url} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6 mb-4">
          {activities.slice(2, 4).map((activity, index) => (
            <div key={index} className="card">
              <i className={`material-icons m-4 ${activity.icon}`}></i>
              <div className="card-body">
                <h2 className="card-title">{activity.title}</h2>
                <p className="card-text">{activity.content}</p>
                <Link to={activity.url} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-12 mb-4">
          {activities.slice(4).map((activity, index) => (
            <div key={index} className="card">
              <i className={`material-icons m-4 ${activity.icon}`}></i>
              <div className="card-body">
                <h2 className="card-title">{activity.title}</h2>
                <p className="card-text">{activity.content}</p>
                <Link to={activity.url} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
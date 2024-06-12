import React, { useState, useEffect } from "react";
import axios from "axios";
import './../tasks.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/tasks/")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <>
      <div className="tasks-container">
        <h1 className="admin-login">Tasks List</h1>
        <div className="table-wrapper">
          <table className="tasks-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Scheduled Date & Time</th>
                <th>Assignee</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.task_description}</td>
                  <td>{task.task_status}</td>
                  <td>{task.scheduled_date_time}</td>
                  <td>{task.task_assignee}</td>
                  <td>{task.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="carousel-wrapper">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop>
            {tasks.map(task => (
              <div key={task.id} className="carousel-item">
                <p><strong>Description:</strong> {task.task_description}</p>
                <p><strong>Status:</strong> {task.task_status}</p>
                <p><strong>Scheduled Date & Time:</strong> {task.scheduled_date_time}</p>
                <p><strong>Assignee:</strong> {task.task_assignee}</p>
                <p><strong>Department:</strong> {task.department}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="tasks-container">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      <Link to="/events">View Events</Link>
      </button>
      </div>
    </>
  );
};

export default TaskList;

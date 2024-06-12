import React, { useState, useEffect } from "react";
import axios from "axios";
import './../events.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/events/")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="events-container">
      <h1 className="admin-login">Events</h1>
      <div className="table-wrapper">
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.event_name}</td>
                <td>{event.event_description}</td>
                <td>{event.event_status}</td>
                <td>{event.event_date_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          {events.map(event => (
            <div key={event.id} className="carousel-item">
              <p><strong>Event Name:</strong> {event.event_name}</p>
              <p><strong>Description:</strong> {event.event_description}</p>
              <p><strong>Status:</strong> {event.event_status}</p>
              <p><strong>Date & Time:</strong> {event.event_date_time}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventList;

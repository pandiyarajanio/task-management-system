import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/events/", {
        event_name: name,
        event_description: description,
        event_status: status,
        event_date_time: eventDateTime,
      });
      console.log("Event added:", response.data);
      // Reset form fields
      setName("");
      setDescription("");
      setStatus("");
      setEventDateTime("");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div>
      <h1 className="admin-login">Add Event</h1>
      <form onSubmit={handleSubmit} className="form-labal">
        <label>Name:</label>
        <br />
        <input
          type="text"
          className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description:</label>
        <br />
        <input
          type="text"
          className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Status:</label>
        <br />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Event Date Time:</label>
        <br />
        <input
          type="datetime-local"
          value={eventDateTime}
          onChange={(e) => setEventDateTime(e.target.value)}
          required
          className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br />
        <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [task_description, settask_description] = useState('');
  const [task_status, settask_status] = useState('');
  const [scheduled_date_time, setscheduled_date_time] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [departments, setDepartments] = useState([]);
  const [assignees, setAssignees] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/departments/')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error fetching departments:', error));
    axios.get('http://127.0.0.1:8000/tasks/')
      .then(response => setAssignees(response.data))
      .catch(error => console.error('Error fetching assignees:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/tasks/', {
        task_description,
        task_status,
        scheduled_date_time: scheduled_date_time,
        task_assignee: assigneeId,
        department: departmentId
      });
      console.log('Task added:', response.data);
      // Reset form fields
      settask_description('');
      settask_status('');
      setscheduled_date_time('');
      setAssigneeId('');
      setDepartmentId('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h1 className="admin-login">Add Task</h1>
      <form onSubmit={handleSubmit} className='task-form'>
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description:</label>
        <br />
        <input type="text" value={task_description} onChange={(e) => settask_description(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Status:</label>
        <br />
        <select value={task_status} onChange={(e) => settask_status(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Scheduled Date Time:</label>
        <br />
        <input type="datetime-local" value={scheduled_date_time} onChange={(e) => setscheduled_date_time(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Assignee:</label>
        <br />
        <select value={assigneeId} onChange={(e) => setAssigneeId(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Select Assignee</option>
          {assignees.map(assignee => (
            <option key={assignee.id} value={assignee.id}>{assignee.task_assignee}</option>

          ))}
        </select>
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Department:</label>
        <br />
        <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Select Department</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>{department.department_name}</option>
          ))}
        </select>
        <br />
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

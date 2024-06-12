import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/departments/')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error fetching departments:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/', {
        user_name,
        email,
        department: departmentId
      });
      console.log('User added:', response.data);
      // Reset form fields
      setUserName('');
      setEmail('');
      setDepartmentId('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1 className="admin-login">Add User</h1>
      <form onSubmit={handleSubmit} className="form-labal">
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Name:</label>
        <br />
        <input type="text" value={user_name} onChange={(e) => setUserName(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email:</label>
        <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <br />
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Department:</label>
        <br />
        <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          <option value="">Select Department</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>{department.department_name}</option>
          ))}
        </select>
        <br />
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;

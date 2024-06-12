// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, isAdmin }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {isAdmin && (
          <>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/add-department">Add Department</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/add-user">Add User</Link></li>
            <li><Link to="/add-tasks">Add Task</Link></li>
            <li><Link to="/add-events">Add Event</Link></li>
          </>
        )}
        {isLoggedIn && !isAdmin && (
          <>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/update-status">Update Status</Link></li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li><Link to="/admin">Admin Login</Link></li>
            <li><Link to="/employee-login">Employee Login</Link></li>
            <li><Link to="/employee-register">Employee Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

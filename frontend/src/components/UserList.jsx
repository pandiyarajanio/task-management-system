import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './../Userlist.css'


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users/')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="users-container">
      <h1 className="admin-login">User List</h1>
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          {users.map(user => (
            <div key={user.id} className="carousel-item">
              <p><strong>User Name:</strong> {user.user_name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Department:</strong> {user.department}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default UserList;

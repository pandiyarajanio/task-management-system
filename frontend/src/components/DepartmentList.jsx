import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/departments/")
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error("Error fetching departments:", error));
  }, []);

  return (
    <div className="department-container">
      <div className="table-wrapper">
        <h1 className="admin-login">Departments</h1>
        <table className="department-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.department_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          {departments.map((department) => (
            <div key={department.id} className="carousel-item">
              <p><strong>ID:</strong> {department.id}</p>
              <p><strong>Department Name:</strong> {department.department_name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DepartmentList;

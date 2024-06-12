import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="web-page">Welcome</h1>
      <p className="select-home">Please select an option:</p>
      <ul className="navber-home">
        <li>
          <Link to="/admin-login">Admin Login</Link>
        </li>
        <li>
          <Link to="/employee-login">Employee Login</Link>
        </li>
        <li>
          <Link to="/employee-register">Employee Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

import React from 'react'
import { Link } from "react-router-dom";

export const Adminhomepage = () => {
    return (
        <div>
            <h1 className="web-page">Hey Admin</h1>
            <p className="select-home">Please select an option:</p>
            <ul className="navber-home">
                <li>
                    <Link to="/add-department">Add Department</Link>
                </li>
                <li>
                    <Link to="/add-tasks">Add Tasks</Link>
                </li>
                <li>
                    <Link to="/add-events">Add Events</Link>
                </li>
                <li>
                    <Link to="/update-status">Update Status</Link>
                </li>
                <li>
                    <Link to="/add-user">Add User</Link>
                </li>
                
            </ul>
        </div>
    )
}

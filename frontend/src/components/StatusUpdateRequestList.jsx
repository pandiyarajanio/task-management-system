// UNIQUE
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const StatusUpdateRequestList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState({});

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/tasks/");
//       setTasks(response.data);
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   const handleStatusChange = (taskId, newStatus) => {
//     setSelectedStatus({
//       ...selectedStatus,
//       [taskId]: newStatus,
//     });
//   };

//   const handleUpdateStatus = async (taskId) => {
//     const newStatus = selectedStatus[taskId];
//     if (!newStatus) {
//       console.error("Status is required");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/tasks/${taskId}/`,
//         {
//           task_status: newStatus,
//         }
//       );
//       console.log("Status updated:", response.data);
//       fetchTasks(); // Refresh the list after updating
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       {tasks.map((task) => (
//         <div key={task.id}>
//           <p>Task Description: {task.task_description}</p>
//           <p>Current Status: {task.task_status}</p>
//           <select
//             value={selectedStatus[task.id] || ""}
//             onChange={(e) => handleStatusChange(task.id, e.target.value)}
//           >
//             <option value="">Select New Status</option>
//             <option value="pending">Pending</option>
//             <option value="completed">Completed</option>
//           </select>
//           <button onClick={() => handleUpdateStatus(task.id)}>
//             Update Status
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatusUpdateRequestList;

// DOUBLE ENTRY

import React, { useState, useEffect } from "react";
import axios from "axios";
import './../status.css'

const StatusUpdateRequestList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/tasks/");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    setSelectedStatus({
      ...selectedStatus,
      [taskId]: newStatus,
    });
  };

  const handleUpdateStatus = async (taskId) => {
    const newStatus = selectedStatus[taskId];
    if (!newStatus) {
      console.error("Status is required");
      return;
    }

    const taskToUpdate = tasks.find((task) => task.id === taskId);

    if (taskToUpdate) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/tasks/", {
          ...taskToUpdate,
          task_status: newStatus,
        });
        console.log("Status updated:", response.data);

        // Update the task in the local state
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, task_status: newStatus } : task
          )
        );

        // Clear the selected status for the task
        setSelectedStatus({
          ...selectedStatus,
          [taskId]: "",
        });
      } catch (error) {
        console.error("Error updating status:", error);
      }
    }
  };

  return (
    <div className="task-list-container">
      <h1 className="admin-login">Task List with Status Update</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Current Status</th>
            <th>Select New Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.task_description}</td>
              <td>{task.task_status}</td>
              <td>
                <select
                  value={selectedStatus[task.id] || ""}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option value="">Select New Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUpdateStatus(task.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusUpdateRequestList;

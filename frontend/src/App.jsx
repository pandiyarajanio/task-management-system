import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DepartmentList from "./components/DepartmentList";
import DepartmentForm from "./components/DepartmentForm";
import AdminLogin from "./components/AdminLogin";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeRegister from "./components/EmployeeRegister";
import UserList from "./components/UserList";
import TaskList from "./components/TaskList";
import EventList from "./components/EventList";
import StatusUpdateRequestList from "./components/StatusUpdateRequestList";
import HomePage from "./components/Homepage";
import UserForm from "./components/UserForm";
import TaskForm from "./components/TaskForm";
import EventForm from "./components/EventForm";
import { Adminhomepage } from "./components/Adminhomepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<DepartmentList />} /> 
          <Route path="/add-department" element={<DepartmentForm />} />  
          <Route path="/admin-login" element={<AdminLogin />} /> 
          <Route path="/employee-login" element={<EmployeeLogin />} /> 
          <Route path="/employee-register" element={<EmployeeRegister />} /> 
          <Route path="/users" element={<UserList />} />  
          <Route path="/add-user" element={<UserForm />} />{" "}  
          <Route path="/adminhomepage" element={<Adminhomepage />} />
          {/* Add route for UserForm */}
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/add-tasks" element={<TaskForm />} /> 
          <Route path="/events" element={<EventList />} />  
          <Route path="/add-events" element={<EventForm />} /> 
          <Route path="/update-status" element={<StatusUpdateRequestList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// new

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DepartmentList from "./components/DepartmentList";
// import DepartmentForm from "./components/DepartmentForm";
// import AdminLogin from "./components/AdminLogin";
// import EmployeeLogin from "./components/EmployeeLogin";
// import EmployeeRegister from "./components/EmployeeRegister";
// import UserList from "./components/UserList";
// import TaskList from "./components/TaskList";
// import EventList from "./components/EventList";
// import StatusUpdateRequestList from "./components/StatusUpdateRequestList";
// import HomePage from "./components/Homepage";
// import UserForm from "./components/UserForm";
// import TaskForm from "./components/TaskForm";
// import EventForm from "./components/EventForm";
// import NavBar from "./components/NavBar";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleLogin = (userType) => {
//     setIsLoggedIn(true);
//     setIsAdmin(userType === "admin");
//   };

//   return (
//     <Router>
//       <div className="App">
//         <NavBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/departments" element={
//             <ProtectedRoute
//               element={<DepartmentList />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/add-department" element={
//             <ProtectedRoute
//               element={<DepartmentForm />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/admin" element={<AdminLogin onLogin={() => handleLogin("admin")} />} />
//           <Route path="/employee-login" element={<EmployeeLogin onLogin={() => handleLogin("employee")} />} />
//           <Route path="/employee-register" element={<EmployeeRegister />} />
//           <Route path="/users" element={
//             <ProtectedRoute
//               element={<UserList />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/add-user" element={
//             <ProtectedRoute
//               element={<UserForm />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/tasks" element={
//             <ProtectedRoute
//               element={<TaskList />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//             />
//           } />
//           <Route path="/add-tasks" element={
//             <ProtectedRoute
//               element={<TaskForm />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/events" element={
//             <ProtectedRoute
//               element={<EventList />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/add-events" element={
//             <ProtectedRoute
//               element={<EventForm />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//               adminOnly
//             />
//           } />
//           <Route path="/update-status" element={
//             <ProtectedRoute
//               element={<StatusUpdateRequestList />}
//               isLoggedIn={isLoggedIn}
//               isAdmin={isAdmin}
//             />
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

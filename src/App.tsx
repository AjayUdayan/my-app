// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import "./App.css";
// import "tailwindcss/tailwind.css";
// import "react-toastify/dist/ReactToastify.css";
// import { UserService } from './services/UserService';
// import { ToastContainer } from 'react-toastify';


// const App = () => {
//   const [userData, setUserData] = useState<any>(null);
//   console.log(userData);
//   const token = localStorage.getItem('token');
//   // const [isAuthenticated, setIsAuthenticated] = useState(userData ? true : false);

//   const isAuthenticated = () => {
//     return token !== null;
//   };
//   return (
//     <BrowserRouter>
//         <ToastContainer />

//       <Routes>
//         <Route path="/"
//            element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route
//           path="/signup"
//           element={<SignUp />}
//         />
//         {isAuthenticated() && (
//           <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import "./App.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


// Define a custom route component that checks if the user is authenticated
const PrivateRoute: React.FC<{
  element: React.ReactElement;
  isAuthenticated: boolean;
}> = ({ element, isAuthenticated }) => (
  isAuthenticated ? element : <Navigate to="/login" />
);
const token = localStorage.getItem('token');
// Simulate authentication status
const isAuthenticated = token ? true : false; // Replace with your actual authentication logic

// App component
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div>
        {/* Wrap routes in Routes */}
        <Routes>
          {/* Public routes */}
          <Route path="/"
            element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
          {/* Protected route using PrivateRoute */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                element={<Dashboard />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
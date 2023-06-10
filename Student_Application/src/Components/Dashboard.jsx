import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logoImage from '../assets/uglogo1.jpeg';

const Dashboard = () => {
  // Sample data for demonstration
  const studentName = 'Doe Agudey Daniel ';
  const enrolledCourses = [
    { id: 1, name: 'Data Structures' },
    { id: 2, name: 'Discrete Maths' },
    { id: 3, name: 'Digital Circuits' },
  ];

  // Sample widget data
  const widgets = [
    { id: 1, title: 'Level and Semester', content: 'Widget content here' },
    { id: 2, title: 'Courses', content: 'Widget content here' },
    { id: 3, title: 'Projects', content: 'Widget content here' },
    { id: 4, title: 'Grades', content: 'Widget content here' },
    { id: 5, title: 'CGPA', content: 'Widget content here' },
  ];

  // Authentication and Authorization
  const isAuthenticated = true; // Placeholder for authentication state

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="ddropdown">
          <button className="ddropbtn">Menu</button>
          <div className="ddropdown-content">
            <a href="https://sakai.ug.edu.gh/portal/xlogin">Sakai</a>
            <a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login">Mis website</a>
            <a href="https://sts.ug.edu.gh/services/">Student services</a>
          </div>
        </div>
        <img src={logoImage}  alt="UG Logo" className="logo" />
        <h1 className="dashboard-heading">Welcome to the SES, {studentName}!</h1>
      </div>

      <div className="main-content">
        {isAuthenticated ? (
          <>
            <div className="dashboard-widgets">
              <div className="widgetd-row">
                {widgets.map((widget) => (
                  <div className="widgetd" key={widget.id}>
                    <h2 className="widgetd-title">{widget.title}</h2>
                    <p className="widgetd-content">{widget.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="enrolled-courses">
              <h2>Enrolled Courses:</h2>
              {enrolledCourses.length > 0 ? (
                <ul>
                  {enrolledCourses.map((course) => (
                    <li key={course.id}>{course.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No courses enrolled.</p>
              )}
            </div>
          </>
        ) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

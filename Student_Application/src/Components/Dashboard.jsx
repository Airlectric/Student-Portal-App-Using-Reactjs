import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logoImage from '../assets/uglogo1.jpeg';
import studentImage from '../assets/dp.png';


const Dashboard = () => {
  // Sample data for demonstration
  const studentName = 'Doe Agudey Daniel';
  const enrolledCourses = [
    { id: 1, name: 'Data Structures' },
    { id: 2, name: 'CBAS 210' },
    { id: 3, name: 'Digital Circuits Design' },
  ];
  const assignments = [
    { id: 1, title: 'Data Communication', dueDate: '2023-06-15' },
    { id: 2, title: 'CBAS 210', dueDate: '2023-06-20' },
  ];
  const projects = [
    { id: 1, title: 'DSA project 1', deadline: '2023-06-30' },
    { id: 2, title: 'Linear Circuit', deadline: '2023-07-15' },
  ];
  const previousSemesterResults = [
    { id: 1, course: 'Python', grade: 'A' },
    { id: 2, course: 'Discrete Maths', grade: 'A' },
    { id: 3, course: 'Digital Circuits', grade: 'A' },
  ];
  const currentCGPA = 3.75;

  // Authentication and Authorization
  const isAuthenticated = true; // Placeholder for authentication state


  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img src={studentImage} alt="Student" className="student-image" />
        <h2 className="student-name">{studentName}</h2>
        <p className="student-bio">
        Doe Daniel is an ambitious engineering student currently pursuing a Bachelor's degree in Computer Engineering at the University Of Ghana. With a passion for problem-solving and innovation, 
        Daniel is dedicated to gaining a deep understanding of the principles and applications of engineering. 
        </p>
        <table className="student-details">
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>Doe</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>Agudey</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>agudeydaniel@.com</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>01/01/1990</td>
            </tr>
            <tr>
              <td>Department:</td>
              <td>Computer Engineering</td>
            </tr>
            <tr>
              <td>Level:</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Semester:</td>
              <td>Two</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content">
        <div className="top-bar">
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <a href="/">Home</a>
              <a href="https://sakai.ug.edu.gh/portal/xlogin">Sakai</a>
              <a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login">Mis website</a>
              <a href="https://sts.ug.edu.gh/services/">Student services</a>
            </div>
          </div>
          <img src={logoImage} alt="UG Logo" className="logo" />
          <h1 className="dashboard-heading">Welcome to the SES, {studentName}!</h1>
        </div>

        <div className="wid-content">
          {isAuthenticated ? (
            <>
              <div className="dashboard-wid">
                <div className="wid-row">
                  <div className="previous-results widget unique-widget">
                    <h2>Previous Semester Results:</h2>
                    {previousSemesterResults.length > 0 ? (
                      <ul>
                        {previousSemesterResults.map((result) => (
                          <li key={result.id}>
                            {result.course} - Grade: {result.grade}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No results available.</p>
                    )}
                  </div>
                  <div className="current-cgpa widget">
                    <h2>Current CGPA:</h2>
                    <p>{currentCGPA}</p>
                  </div>
                </div>
                <div className="wid-row">
                  <div className="registered-courses widget">
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
                  <div className="assignments widget">
                    <h2>Assignments:</h2>
                    {assignments.length > 0 ? (
                      <ul>
                        {assignments.map((assignment) => (
                          <li key={assignment.id}>
                            {assignment.title} - Due: {assignment.dueDate}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No assignments.</p>
                    )}
                  </div>
                </div>
                <div className="wid-row">
                  <div className="projects widget">
                    <h2>Projects:</h2>
                    {projects.length > 0 ? (
                      <ul>
                        {projects.map((project) => (
                          <li key={project.id}>
                            {project.title} - Deadline: {project.deadline}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No projects.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="timetable widget">
  <h2 style={{ color: 'blue', marginBottom: '10px' }}>Timetable:</h2>
  <table
    className="timetable"
    style={{
      borderCollapse: 'separate', border: '1px solid blue' ,
      width: '100%',
      textAlign: 'center',
    }}
  >
    <thead>
      <tr>
        <th style={{ backgroundColor: 'lightgray', padding: '10px' }}>Day</th>
        <th style={{ backgroundColor: 'lightgray', padding: '10px' }}>Time</th>
        <th style={{ backgroundColor: 'lightgray', padding: '10px' }}>Course</th>
        <th style={{ backgroundColor: 'lightgray', padding: '10px' }}>Lecturer</th>
        <th style={{ backgroundColor: 'lightgray', padding: '10px' }}>Lecture Hall</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday</td>
        <td>09:00 AM - 10:30 AM</td>
        <td>CPEN 203</td>
        <td>Mr.Waka</td>
        <td>Room 101</td>
      </tr>
      <tr>
        <td>Monday</td>
        <td>11:00 AM - 12:30 PM</td>
        <td>CPEN 208</td>
        <td>Mr.Janie</td>
        <td>Room 202</td>
      </tr>
      <tr>
        <td>Monday</td>
        <td>02:00 PM - 03:30 PM</td>
        <td>CPEN 204</td>
        <td>Michael Klottey</td>
        <td>Room 303</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>09:00 AM - 10:30 AM</td>
        <td>CPEN 205</td>
        <td>Sarah Obi</td>
        <td>Room 104</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>11:00 AM - 12:30 PM</td>
        <td>CPEN 111</td>
        <td>Robert Larry</td>
        <td>Room 205</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>02:00 PM - 03:30 PM</td>
        <td>CPEN 322</td>
        <td>Mr.Kwasi Baiden</td>
        <td>Room 306</td>
      </tr>
    </tbody>
  </table>
</div>

            </>
          ) : (
            <p>Please log in to access the dashboard.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
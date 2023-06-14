import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logoImage from '../assets/uglogo1.jpeg';
import studentImage from '../assets/dp.png';

const Dashboard = () => {
  // Sample data for demonstration
  const studentName = 'Doe Agudey Daniel';
  const [showCourses, setShowCourses] = useState(true);
  const [showGrades, setShowGrades] = useState(true);
  const [showAssignments, setShowAssignments] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showTimetable, setShowTimetable] = useState(true);

  const enrolledCourses = [
    { id: 1, name: 'Data Structures', credit: '3' },
    { id: 2, name: 'CBAS 210', credit: '3' },
    { id: 3, name: 'Digital Circuits Design', credit: '3' },
    { id: 4, name: 'Differential Equations', credit: '4' },
    { id: 5, name: 'Software Engineering', credit: '3' },
    { id: 6, name: 'Data communications', credit: '3' },
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
    { id: 1, course: 'Python',credit: '3', grade: 'A' },
    { id: 2, course: 'Discrete Maths',credit: '3', grade: 'A' },
    { id: 3, course: 'Digital Circuits',credit: '3', grade: 'A' },
  ];

  
  const calculateGPA = () => {
    const gradePoints = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0,
    };

    let totalCredits = 0;
    let totalGradePoints = 0;

    previousSemesterResults.forEach((result) => {
      const credit = Number(result.credit); // Assuming the credit is provided in the result object
      const grade = result.grade;
      const gradePoint = gradePoints[grade];

      totalCredits += credit;
      totalGradePoints += credit * gradePoint;
    });

    const gpa = totalGradePoints / totalCredits;
    return gpa.toFixed(2); // Return GPA with 2 decimal places
  };

  const gpa = calculateGPA();

  return (
    <div className="dashboard-container">
      <div className="navigation-bar">
        <div className="top-bar">
          <div className="dropdown">
            <button className="dropbtn">Settings</button>
            <div className="dropdown-content">
              <Link to="/settings">Profile</Link>
              <Link to="/settings">Preferences</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
        <Link to="/">Home</Link>
  <a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login">Grades</a>
  <a href="https://sakai.ug.edu.gh/portal/xlogin">Assignments</a>
  <a href="https://sts.ug.edu.gh/services/">Course and Lecturer Evaluation</a>
  <a href="https://sts.ug.edu.gh/services/">Timetable</a>
      </div>
      <div className="sidebar">
        <img src={studentImage} alt="Student" className="student-image" />
        <h2 className="student-name">{studentName}</h2>
        <p className="student-bio">
          Doe Daniel is an ambitious engineering student currently pursuing a Bachelor's degree in Computer Engineering
          at the University Of Ghana. With a passion for problem-solving and innovation, Daniel is dedicated to gaining a
          deep understanding of the principles and applications of engineering.
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
        <div className="main-content">
          <div className="card">
            <img src={logoImage} alt="University Logo" className="university-logo" />
            <h1>Welcome, {studentName}</h1>
            {showCourses && (
              <div className="grades">
                <h2>Second semester courses</h2>
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrolledCourses.map((course) => (
                      <tr key={course.id}>
                        <td>{course.name}</td>
                        <td>{course.credit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {showGrades && (
              <div className="grades">
                <h2>Grades for first semester courses</h2>
                <h2>GPA: {gpa}</h2>
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Credit</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousSemesterResults.map((result) => (
                      <tr key={result.id}>
                        <td>{result.course}</td>
                        <td>{result.credit}</td>
                        <td>{result.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {showAssignments && (
              <div className="assignments">
                <h2>Assignments</h2>
                <ul>
                  {assignments.map((assignment) => (
                    <li key={assignment.id}>
                      <span className="assignment-title">{assignment.title}</span> - Due:{' '}
                      {assignment.dueDate}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showProjects && (
              <div className="projects">
                <h2>Projects</h2>
                <ul>
                  {projects.map((project) => (
                    <li key={project.id}>
                      <span className="project-title">{project.title}</span> - Deadline:{' '}
                      {project.deadline}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showTimetable && (
              <div className="timetable">
                <h2>Timetable</h2>
                <table className="timetable-table">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9:00 AM - 10:30 AM</td>
                      <td>Data Structures</td>
                      <td></td>
                      <td>Data Communications</td>
                      <td>Differential Equations</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10:45 AM - 12:15 PM</td>
                      <td></td>
                      <td>CBAS 210</td>
                      <td>Data Structures</td>
                      <td>Data Communications</td>
                      <td>Digital Circuits Design</td>
                    </tr>
                    <tr>
                      <td>1:00 PM - 2:30 PM</td>
                      <td></td>
                      <td>Digital Circuits Design</td>
                      <td></td>
                      <td></td>
                      <td>CBAS 210</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <footer className="footer">
            <p>&copy; 2023 University of Ghana, Sch Of Engineering. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

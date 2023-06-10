import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="log"> 
      <form onSubmit={handleSubmit}>
        <h2>Welcome to the School of Engineering</h2> 
        <h2>Login</h2>
        <div className="iform-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="iform-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <p className="register-link">Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;

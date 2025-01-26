import './Account.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        username,
        email,
        number,
        password,
      });
      console.log('Response:', response.data); // Log the response data
      setMessage('Signup successful!'); // Set success message
    } catch (error) {
      console.error('Error:', error.response?.data || error.message); // Log the error message
      setMessage(error.response?.data?.message || 'Signup failed. Please try again.'); // Set error message
    }
  };

  return (
    <>
      <div className='box'>
        <p>Please Sign Up</p>
        <form onSubmit={handleSignup}>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="no">Number:</label>
          <input
            type="text"
            id="no"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn'>Submit</button>
          <p>{message}</p>
          <p>Do not have an account? <Link to="/account" className='link'>Sign In</Link></p>
        </form>
      </div>
    </>
  );
};

export default Signup;
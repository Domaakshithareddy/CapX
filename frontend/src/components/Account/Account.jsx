import './Account.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Account = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to the backend
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username,
                password
            });
            console.log('Response:', response.data); // Utilize the response here
            setMessage('Login successful!'); // Set the message
        } catch (error) {
            console.error('Error:', error.response?.data || error.message); // Log the error
            setMessage('Login failed. Please check your credentials.'); // Set the message
        }
    };

    return (
        <>
            <div className='box'>
                <p>Please Sign In</p>
                <form onSubmit={handleLogin}>
                    <label htmlFor="name">Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    <p>Do not have an account? <Link to="/signup" className='link'>Sign Up</Link></p>
                </form>
            </div>
        </>
    );
};

export default Account;

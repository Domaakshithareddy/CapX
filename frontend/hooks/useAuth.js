import { useState } from 'react';
import AuthService from '../services/AuthService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      setUser(response); // Save the logged-in user details
      return response;
    } catch (err) {
      setError(err.response.data.message || 'Login failed');
    }
  };

  const signup = async (username, email, number, password) => {
    try {
      const response = await AuthService.signup(
        username,
        email,
        number,
        password
      );
      setUser(response); // Save the newly registered user details
      return response;
    } catch (err) {
      setError(err.response.data.message || 'Signup failed');
    }
  };

  const logout = () => {
    setUser(null); // Clear user state
  };

  return { user, error, login, signup, logout };
};

export default useAuth;

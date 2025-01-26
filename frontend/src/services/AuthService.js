import axios from '../api/axiosConfig';

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post('/auth/signin', { username, password });
    return response.data;
  },

  signup: async (username, email, number, password) => {
    const response = await axios.post('/auth/signup', {
      username,
      email,
      number,
      password,
    });
    return response.data;
  },
};

export default AuthService;

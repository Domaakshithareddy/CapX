import axios from '../api/axiosConfig';

const UserService = {
  getUserDetails: async (userId) => {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  },
};

export default UserService;

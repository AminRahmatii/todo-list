import axios from 'axios';

const myAPI = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default myAPI;

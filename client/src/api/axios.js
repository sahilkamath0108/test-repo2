import axios from 'axios';

// Base URL for API requests
const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Your server's URL
});

export default instance;

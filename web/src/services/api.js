import axios from 'axios';

// Conexão com minha API
const api = axios.create({
  baseURL: 'https://localhost:5001/v1/',
});

export default api;

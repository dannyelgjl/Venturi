import axios from 'axios';

// Conexão com API do github
const api = axios.create({
  baseURL: 'http://api.github.com/'
});

export default api;

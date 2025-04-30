import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const rateService = {
  getRates: async () => {
    const response = await api.get('/rates/history');
    return response.data;
  },
  
  getLatestRate: async () => {
    const response = await api.get('/rates/latest');
    return response.data;
  }
};

export default api; 
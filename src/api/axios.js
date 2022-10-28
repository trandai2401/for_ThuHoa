import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('jwt_token');
  const clonedConfig = { ...config };
  clonedConfig.headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    clonedConfig.headers['Authorization'] = `Bearer ${token}`;
  }
  return clonedConfig;
});
export default axiosInstance;

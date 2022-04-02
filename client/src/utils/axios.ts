import axios from 'axios';

const applyTokenInterceptor = (config: any) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export const Axios = axios.create({
  baseURL: `${location.origin}/api/`,
});
Axios.interceptors.request.use(applyTokenInterceptor);

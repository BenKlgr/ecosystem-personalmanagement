import axios from 'axios';
import { IdentityServerBaseUrl } from '../config/api';

const applyTokenInterceptor = (config: any) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export const Axios = axios.create({
  baseURL: `${location.origin}/api/`,
});
Axios.interceptors.request.use(applyTokenInterceptor);

export const IdentityAxios = axios.create({
  baseURL: IdentityServerBaseUrl,
});
IdentityAxios.interceptors.request.use(applyTokenInterceptor);

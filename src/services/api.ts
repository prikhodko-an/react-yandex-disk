import axios, { AxiosInstance } from 'axios';
import { getToken } from './helpers';
import { YANDEX_PASSPORT_URL, YANDEX_DISK_URL } from './config.json';

export interface IApiInstance extends AxiosInstance {}

const api: IApiInstance = axios.create({
  baseURL: YANDEX_DISK_URL,
});

// add auth header to each API request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    if (config.url === YANDEX_PASSPORT_URL) {
      config.url = `${config.url}&oauth_token=${token}`;
    } else {
      config.headers.Authorization = `OAuth ${token}`;
    }
  }

  return config;
});

export default api;

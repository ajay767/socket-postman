import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({ baseURL: 'http://localhost:8080' });

export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStorageItem(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

export const setCookieItem = (key, value) => {
  Cookies.set(key, value);
};

export const getCookieItem = (key) => {
  const data = Cookies.get(key);
  return data;
};

export const getAuthToken = () => {
  return { token: getCookieItem('POSTMAN_TOKEN') };
};

const config = () => {
  return { authorization: `Bearer ${getCookieItem('POSTMAN_TOKEN')}` };
};

export const signup = async (data) => {
  const response = await api.post('/api/v1/auth/signup', data);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post('/api/v1/auth/login', data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/api/v1/auth/profile', { headers: config() });
  return response.data;
};

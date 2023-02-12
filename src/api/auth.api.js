import api from '../utils/api';

export function login({ email, password }) {
  return api.post('/auth/sign_in', { email, password });
}

export function getMe() {
  return api.get('/users/me');
}

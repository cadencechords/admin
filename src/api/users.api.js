import api from '../utils/api';

export function getAll() {
  return api.get('/admin/users');
}

export function getOne(id) {
  return api.get(`/admin/users/${id}`);
}

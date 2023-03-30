import api from '../utils/api';

export function getAll() {
  return api.get('/admin/teams');
}

export function getOne(id) {
  return api.get(`/admin/teams/${id}`);
}

export function getRoles(id) {
  return api.get(`/admin/teams/${id}/roles`);
}

export function getSongs(id) {
  return api.get(`/admin/teams/${id}/songs`);
}

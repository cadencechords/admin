import api from '../utils/api';

export function getOne(id) {
  return api.get(`/admin/roles/${id}`);
}

import { useQuery } from '@tanstack/react-query';
import * as rolesApi from '../../api/roles.api';

export default function useRole(id, { enabled } = {}) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['roles', `${id}`],
    queryFn: async () => {
      return (await rolesApi.getOne(id)).data;
    },
    enabled: !!enabled,
  });

  return { isLoading, isError, data };
}

import { useQuery } from '@tanstack/react-query';
import * as usersApi from '../../api/users.api';

export default function useUsers() {
  const {
    isLoading,
    isError,
    data = [],
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return (await usersApi.getAll()).data;
    },
  });

  return { isLoading, isError, data };
}

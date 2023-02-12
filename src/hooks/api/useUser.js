import { useQuery } from '@tanstack/react-query';
import * as usersApi from '../../api/users.api';

export default function useUser(id) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['users', `${id}`],
    queryFn: async () => {
      return (await usersApi.getOne(id)).data;
    },
  });

  return { isLoading, isError, data };
}

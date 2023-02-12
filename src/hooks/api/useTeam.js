import { useQuery } from '@tanstack/react-query';
import * as teamsApi from '../../api/teams.api';

export default function useTeam(id) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['teams', `${id}`],
    queryFn: async () => {
      return (await teamsApi.getOne(id)).data;
    },
  });

  return { isLoading, isError, data };
}

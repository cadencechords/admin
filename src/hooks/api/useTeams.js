import { useQuery } from '@tanstack/react-query';
import * as teamsApi from '../../api/teams.api';

export default function useTeams() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      return (await teamsApi.getAll()).data;
    },
  });

  return { isLoading, isError, data };
}

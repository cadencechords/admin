import { useQuery } from '@tanstack/react-query';
import * as teamsApi from '../../api/teams.api';

export default function useTeamSongs(teamId) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['teams', `${teamId}`, 'songs'],
    queryFn: async () => {
      return (await teamsApi.getSongs(teamId)).data;
    },
  });

  return { isLoading, isError, data };
}

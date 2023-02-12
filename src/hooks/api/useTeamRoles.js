import { useQuery } from '@tanstack/react-query';
import * as teamsApi from '../../api/teams.api';

export default function useTeamRoles(teamId) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['teams', `${teamId}`, 'roles'],
    queryFn: async () => {
      return (await teamsApi.getRoles(teamId)).data;
    },
  });

  return { isLoading, isError, data };
}

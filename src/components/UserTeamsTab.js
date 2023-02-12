import React from 'react';
import useUser from '../hooks/api/useUser';
import { useParams } from 'react-router-dom';
import { Alert, SimpleGrid } from '@mantine/core';
import LoadingIndicator from './LoadingIndicator';
import UserTeamCard from './UserTeamCard';

export default function UserTeamsTab() {
  const { id } = useParams();
  const { data: user, isError } = useUser(id);

  if (user) {
    return (
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 700, cols: 1 }]}>
        {user.teams?.map(team => (
          <UserTeamCard team={team} key={team.id} user={user} />
        ))}
      </SimpleGrid>
    );
  }

  if (isError) {
    return <Alert color="red">There was an issue getting this user</Alert>;
  }

  return <LoadingIndicator />;
}

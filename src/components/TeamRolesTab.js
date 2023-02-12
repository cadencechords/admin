import React from 'react';
import useTeamRoles from '../hooks/api/useTeamRoles';
import { Alert, SimpleGrid } from '@mantine/core';
import LoadingIndicator from './LoadingIndicator';
import TeamRoleCard from './TeamRoleCard';

export default function TeamRolesTab({ team }) {
  const { data: roles, isError } = useTeamRoles(team.id);

  if (roles) {
    return (
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 700, cols: 1 }]}>
        {roles.map(role => (
          <TeamRoleCard key={role.id} role={role} />
        ))}
      </SimpleGrid>
    );
  }

  if (isError) {
    return (
      <Alert color="red">There was an issue retrieving this team's roles</Alert>
    );
  }
  return <LoadingIndicator />;
}

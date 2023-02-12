import { Paper, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { pluralize } from '../utils/string';
import Detail from './Detail';
import useRole from '../hooks/api/useRole';
import { Link } from 'react-router-dom';

export default function UserTeamCard({ team, user }) {
  const membership = team.memberships.find(
    member => member.user_id === user.id
  );

  const { data: role } = useRole(membership.role_id, { enabled: !!membership });

  return (
    <Paper radius="lg" withBorder={true} p="sm">
      <Link to={`/teams/${team.id}/members`}>
        <Text>{team.name}</Text>
      </Link>
      <Text size="xs" color="dimmed">
        {pluralize(team.memberships, 'member')}
      </Text>

      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 720, cols: 1 }]}>
        <Detail label="Position" value={membership.position || 'None'} />
        <Detail label="Role" value={role && role.name} />
      </SimpleGrid>
    </Paper>
  );
}

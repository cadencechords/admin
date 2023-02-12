import { SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { pluralize } from '../utils/string';

export default function TeamMembersTab({ team }) {
  return (
    <div>
      <Text size="sm" c="dimmed" mb="md">
        {pluralize(team.memberships, 'member')}
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 700, cols: 1 }]}>
        {team.memberships?.map(membership => (
          <TeamMemberCard membership={membership} key={membership.id} />
        ))}
      </SimpleGrid>
    </div>
  );
}

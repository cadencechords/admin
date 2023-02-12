import { Flex, Paper, Text } from '@mantine/core';
import React from 'react';
import { getDisplayName } from '../utils/users.utils';
import Detail from './Detail';
import ProfilePicture from './ProfilePicture';
import { Link } from 'react-router-dom';

export default function TeamMemberCard({ membership }) {
  return (
    <Paper radius="lg" withBorder={true} p="sm">
      <Flex gap="xs">
        <ProfilePicture size="sm" user={membership} />
        <Link to={`/users/${membership.user_id}/teams`}>
          <Text size="sm">{getDisplayName(membership)}</Text>
        </Link>
      </Flex>
      <Detail label="Position" value={membership.position || 'None'}></Detail>
    </Paper>
  );
}

import { Avatar } from '@mantine/core';
import React from 'react';
import { getInitials } from '../utils/team.utils';

export default function TeamPicture({ team, ...props }) {
  return (
    <Avatar
      variant="light"
      radius="100%"
      src={team.image_url}
      size="xl"
      {...props}
    >
      {getInitials(team)}
    </Avatar>
  );
}

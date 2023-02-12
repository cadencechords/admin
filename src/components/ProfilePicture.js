import { Avatar } from '@mantine/core';
import React from 'react';
import { getInitials } from '../utils/users.utils';

export default function ProfilePicture({ user, ...props }) {
  return (
    <Avatar
      variant="light"
      radius="100%"
      src={user.image_url}
      size="xl"
      {...props}
    >
      {getInitials(user)}
    </Avatar>
  );
}

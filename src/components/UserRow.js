import { Box, Flex, Text, createStyles } from '@mantine/core';
import React from 'react';
import { getDisplayName, hasName } from '../utils/users.utils';
import { format } from '../utils/date';
import { Link } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';

export default function UserRow({ user, showExtraData = true }) {
  const { classes, cx } = useStyles();

  return (
    <Link to={`/users/${user.id}/teams`}>
      <Box className={cx(classes.row)} p="sm">
        <Flex gap="md">
          <ProfilePicture user={user} size="md" />
          <Flex direction="column" justify="center">
            <Text>{getDisplayName(user)}</Text>
            {hasName(user) && (
              <Text fz="sm" c="dimmed">
                {user.email}
              </Text>
            )}

            {showExtraData && (
              <Flex align="center" gap="sm">
                <Text fz="xs" c="dimmed">
                  {user.teams?.length} teams
                </Text>
                <Text c="dimmed">·</Text>
                <Text fz="xs" c="dimmed">
                  Joined{' '}
                  {format({
                    date: user.created_at,
                    format: 'ddd MMM DD, YYYY',
                  })}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
}

const useStyles = createStyles(theme => ({
  row: {
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
    borderRadius: theme.radius.lg,
  },
}));

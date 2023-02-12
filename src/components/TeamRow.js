import { Box, Flex, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from '../utils/date';
import { pluralize } from '../utils/string';

export default function TeamRow({ team }) {
  const { classes, cx } = useStyles();

  return (
    <Link to={`/teams/${team.id}/members`}>
      <Box className={cx(classes.row)} p="xs">
        <Text>{team.name}</Text>
        <Flex align="center" gap="sm">
          <Text c="dimmed" size="xs">
            {pluralize(team.memberships, 'member')}
          </Text>
          <Text c="dimmed">·</Text>
          <Text size="xs" color="dimmed">
            Created{'  '}
            {format({ date: team.created_at, format: 'ddd MMM d, YYYY' })}
          </Text>
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

import { Box, Flex, Text, createStyles } from '@mantine/core';
import React from 'react';
import { format } from '../utils/date';

export default function SongRow({ song }) {
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.row)} p="xs">
      <Text>{song.name}</Text>
      <Flex align="center" gap="sm">
        <Text size="xs" color="dimmed">
          Created{'  '}
          {format({ date: song.created_at, format: 'ddd MMM D, YYYY' })}
        </Text>
      </Flex>
    </Box>
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

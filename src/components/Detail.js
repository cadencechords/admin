import { Flex, Text } from '@mantine/core';
import React from 'react';

export default function Detail({ label, value }) {
  return (
    <Flex
      justify="space-between"
      align="flex-start"
      direction="column"
      style={{ width: '100%' }}
      py="xs"
    >
      <Text color="dimmed" size="xs" weight="600">
        {label}
      </Text>

      <Text size="sm">{value}</Text>
    </Flex>
  );
}

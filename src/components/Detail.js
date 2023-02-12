import { Flex, Text } from '@mantine/core';
import React from 'react';

export default function Detail({ label, value }) {
  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      direction="column"
      style={{ width: '100%' }}
      py="xs"
    >
      <Text
        color="dimmed"
        size="xs"
        weight="600"
        style={{ width: '100%', textAlign: 'left' }}
      >
        {label}
      </Text>

      <Text size="sm" style={{ width: '100%', textAlign: 'left' }}>
        {value}
      </Text>
    </Flex>
  );
}

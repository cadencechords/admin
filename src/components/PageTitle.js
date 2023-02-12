import { Text } from '@mantine/core';
import React from 'react';

export default function PageTitle({ children }) {
  return (
    <Text size={28} mb="md" weight="bold">
      {children}
    </Text>
  );
}

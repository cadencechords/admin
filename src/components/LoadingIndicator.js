import { Center, Loader } from '@mantine/core';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <Center my="lg">
      <Loader size="xl" color="gray" />
    </Center>
  );
}

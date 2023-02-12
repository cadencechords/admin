import { Text } from '@mantine/core';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default function List({ data, renderItem, loading }) {
  if (loading) return <LoadingIndicator />;
  if (!data?.length) return <Text>No data to show</Text>;
  return data?.map?.(renderItem);
}

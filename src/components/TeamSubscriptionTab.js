import { Badge, Paper, SimpleGrid } from '@mantine/core';
import React from 'react';
import Detail from './Detail';

export default function TeamSubscriptionTab({ team }) {
  const { subscription } = team;

  return (
    <Paper radius="lg" withBorder={true} p="sm">
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 720, cols: 1 }]}
        spacing={0}
      >
        <Detail label="Name" value={subscription.plan_name} />
        <Detail
          label="Status"
          value={<StatusBadge status={subscription.status} />}
        />
        <Detail label="ID" value={subscription.id} />
        <Detail label="Product" value={subscription.stripe_product_id} />
        <Detail label="Price" value={subscription.stripe_price_id} />
        <Detail label="Stripe ID" value={subscription.stripe_subscription_id} />
      </SimpleGrid>
    </Paper>
  );
}

function StatusBadge({ status }) {
  function getColor() {
    if (status === 'active') return 'blue';
    if (status === 'trialing') return 'green';
    return 'red';
  }
  return <Badge color={getColor()}>{status}</Badge>;
}

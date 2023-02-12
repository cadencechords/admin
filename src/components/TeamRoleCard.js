import { Flex, Paper, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import Detail from './Detail';
import useModal from '../hooks/useModal';
import RoleModal from './RoleModal';

export default function TeamRoleCard({ role }) {
  const [isOpened, open, close] = useModal();

  return (
    <Paper radius="lg" withBorder={true} p="sm">
      <Flex
        direction="column"
        justify="space-between"
        style={{ height: '100%' }}
      >
        <div>
          <UnstyledButton onClick={open}>
            <Text size="sm">{role.name}</Text>
          </UnstyledButton>
          {role.description && (
            <Text color="dimmed" size="xs">
              {role.description}
            </Text>
          )}
        </div>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 700, cols: 1 }]}>
          <Detail value={role.permissions?.length} label="Permissions" />
          <Detail value={role.memberships?.length} label="Members" />
        </SimpleGrid>
      </Flex>
      <RoleModal isOpened={isOpened} onClose={close} role={role} />
    </Paper>
  );
}

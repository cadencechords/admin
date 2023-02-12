import { Modal, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import UserRow from './UserRow';

export default function RoleModal({ isOpened, onClose, role }) {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Modal
      size="lg"
      opened={isOpened}
      onClose={onClose}
      fullScreen={isMobile}
      title={role.name}
      overflow="inside"
    >
      <Text size="sm" weight="bold" mb="sm">
        Members ({role.memberships?.length})
      </Text>
      {role.memberships.map(member => (
        <UserRow key={member.id} user={member} showExtraData={false} />
      ))}

      <Text size="sm" weight="bold" mb="sm" mt="lg">
        Permissions ({role.permissions?.length})
      </Text>
      {role.permissions.map(permission => (
        <Text key={permission.id} my="sm" size="sm">
          {permission.name}
        </Text>
      ))}
    </Modal>
  );
}

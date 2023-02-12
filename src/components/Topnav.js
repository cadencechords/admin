import { ActionIcon, Drawer, Header } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import useModal from '../hooks/useModal';
import Sidenav from './Sidenav';

export default function Topnav() {
  const [isOpened, open, close] = useModal();

  const isMobile = useMediaQuery('(max-width: 600px)');

  if (!isMobile) return null;

  return (
    <Header height={60} p="sm">
      <ActionIcon size="xl" onClick={open}>
        <HiOutlineMenu size={25} />
      </ActionIcon>
      <Drawer opened={isOpened} onClose={close} padding="md">
        <Sidenav onClick={close} />
      </Drawer>
    </Header>
  );
}

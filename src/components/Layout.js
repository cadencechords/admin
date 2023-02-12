import { AppShell, Container } from '@mantine/core';
import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useMediaQuery } from '@mantine/hooks';

export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <AppShell navbar={isMobile ? null : <Sidenav />} header={<Topnav />}>
      <Container>{children}</Container>
    </AppShell>
  );
}

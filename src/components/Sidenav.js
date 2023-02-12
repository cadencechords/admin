import {
  Flex,
  Navbar,
  Stack,
  Tooltip,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { TbUser, TbUsers } from 'react-icons/tb';
import { NavLink, useMatch } from 'react-router-dom';

export default function Sidenav({ onClick }) {
  return (
    <Navbar p="md" width={{ xs: 80, base: 0 }}>
      <Stack spacing="xs">
        <NavbarLink
          icon={TbUser}
          label="Users"
          to={'/users'}
          onClick={onClick}
        />
        <NavbarLink
          icon={TbUsers}
          label="Teams"
          to={'/teams'}
          onClick={onClick}
        />
      </Stack>
    </Navbar>
  );
}

function NavbarLink({ icon: Icon, label, onClick, to }) {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const matches = useMatch(to);
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <NavLink to={to}>
        <UnstyledButton
          onClick={onClick}
          p="md"
          className={cx(classes.link, { [classes.active]: !!matches })}
          style={!isMobile ? { width: 50, height: 50 } : null}
        >
          <Flex gap="md" justify="start">
            <Icon style={{ width: 22, height: 22 }} />
            {isMobile && label}
          </Flex>
        </UnstyledButton>
      </NavLink>
    </Tooltip>
  );
}

const useStyles = createStyles(theme => ({
  link: {
    width: '100%',
    borderRadius: theme.radius.md,
    color: 'black',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

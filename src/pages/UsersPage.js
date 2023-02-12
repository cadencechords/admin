import React, { useMemo, useState } from 'react';
import useUsers from '../hooks/api/useUsers';
import { Alert, Text, TextInput } from '@mantine/core';
import List from '../components/List';
import UserRow from '../components/UserRow';
import { CiSearch } from 'react-icons/ci';
import { getFullName } from '../utils/users.utils';
import PageTitle from '../components/PageTitle';
import { pluralize } from '../utils/string';

export default function UsersPage() {
  const { data: users, isError, isLoading } = useUsers();
  const sortedUsers = useMemo(() => {
    return users?.sort((userA, userB) => userB.id - userA.id);
  }, [users]);

  const [query, setQuery] = useState('');

  const filteredUsers = useMemo(() => {
    if (query.length <= 1) return sortedUsers;
    const lowercasedQuery = query?.toLowerCase();

    return sortedUsers?.filter(user => {
      const name = getFullName(user).toLowerCase();
      const email = user.email?.toLowerCase();

      return name.includes(lowercasedQuery) || email.includes(lowercasedQuery);
    });
  }, [sortedUsers, query]);

  if (users) {
    return (
      <>
        <PageTitle>Users</PageTitle>
        <Text c="dimmed" mb="xs" size="sm">
          {pluralize(users, 'user')}
        </Text>
        <TextInput
          mb="lg"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="search"
          icon={<CiSearch />}
        />
        <List
          data={filteredUsers}
          loading={isLoading}
          renderItem={user => <UserRow user={user} key={user.id} />}
        />
      </>
    );
  }
  if (isError)
    return (
      <Alert color="red" radius="lg">
        Error occurred getting users
      </Alert>
    );

  return null;
}

import { Alert, SimpleGrid, Tabs } from '@mantine/core';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserTeamsTab from '../components/UserTeamsTab';
import useUser from '../hooks/api/useUser';
import LoadingIndicator from '../components/LoadingIndicator';
import { getFullName } from '../utils/users.utils';
import Detail from '../components/Detail';
import { format } from '../utils/date';
import ProfilePicture from '../components/ProfilePicture';

export default function UserDetailPage() {
  const { id, tab } = useParams();
  const navigate = useNavigate();
  const { data: user, isError } = useUser(id);

  if (user) {
    return (
      <>
        <ProfilePicture user={user} my="lg" />
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 720, cols: 1 }]}
          align="center"
          spacing={0}
          mb="xl"
        >
          <Detail label="Name" value={getFullName(user)} />
          <Detail label="Email" value={user.email} />
          <Detail label="ID" value={user.id} />
          <Detail label="Phone number" value={user.phone_number || 'None'} />
          <Detail
            label="Joined"
            value={format({
              date: user.created_at,
              format: 'ddd MMM D, YYYY',
            })}
          />
          <Detail label="Timezone" value={user.timezone} />
        </SimpleGrid>
        <Tabs
          radius="md"
          defaultValue="teams"
          value={tab}
          onTabChange={value => navigate(`/users/${id}/${value}`)}
          mb="xl"
        >
          <Tabs.List>
            <Tabs.Tab value="teams">Teams</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        {tab === 'teams' && <UserTeamsTab />}
      </>
    );
  }

  if (isError) return <Alert>There was an issue getting this user</Alert>;

  return <LoadingIndicator />;
}

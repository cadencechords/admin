import { Alert, SimpleGrid, Tabs } from '@mantine/core';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTeam from '../hooks/api/useTeam';
import LoadingIndicator from '../components/LoadingIndicator';
import PageTitle from '../components/PageTitle';
import Detail from '../components/Detail';
import { format } from '../utils/date';
import TeamPicture from '../components/TeamPicture';
import TeamMembersTab from '../components/TeamMembersTab';
import TeamSubscriptionTab from '../components/TeamSubscriptionTab';
import TeamRolesTab from '../components/TeamRolesTab';
import TeamSongsTab from '../components/TeamSongsTab';

export default function TeamDetailPage() {
  const { id, tab } = useParams();
  const navigate = useNavigate();
  const { data: team, isError } = useTeam(id);

  if (team) {
    return (
      <>
        <TeamPicture team={team} mb="md" />
        <PageTitle>{team.name}</PageTitle>
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 720, cols: 1 }]}
          align="center"
          spacing={0}
          mb="xl"
        >
          <Detail label="ID" value={team.id} />
          <Detail label="Stripe ID" value={team.customer_id} />
          <Detail label="Join code" value={team.join_link} />
          <Detail
            label="Join link enabled"
            value={team.join_link_enabled ? 'Yes' : 'No'}
          />
          <Detail
            label="Created"
            value={format({ date: team.created_at, format: 'ddd MMM d, YYYY' })}
          />
          <Detail label="Plan" value={team.subscription?.plan_name} />
        </SimpleGrid>
        <Tabs
          radius="sm"
          defaultValue="members"
          value={tab}
          onTabChange={value => navigate(`/teams/${id}/${value}`)}
          mb="xl"
        >
          <Tabs.List>
            <Tabs.Tab value="members">Members</Tabs.Tab>
            <Tabs.Tab value="subscription">Subscription</Tabs.Tab>
            <Tabs.Tab value="roles">Roles</Tabs.Tab>
            <Tabs.Tab value="songs">Songs</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        {tab === 'members' && <TeamMembersTab team={team} />}
        {tab === 'subscription' && <TeamSubscriptionTab team={team} />}
        {tab === 'roles' && <TeamRolesTab team={team} />}
        {tab === 'songs' && <TeamSongsTab team={team} />}
      </>
    );
  }

  if (isError)
    return <Alert color="red">There was an issue retrieving this team</Alert>;

  return <LoadingIndicator />;
}

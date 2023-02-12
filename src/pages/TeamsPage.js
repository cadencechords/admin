import React, { useMemo, useState } from 'react';
import useTeams from '../hooks/api/useTeams';
import { Alert, Text, TextInput } from '@mantine/core';
import LoadingIndicator from '../components/LoadingIndicator';
import { CiSearch } from 'react-icons/ci';
import TeamRow from '../components/TeamRow';
import PageTitle from '../components/PageTitle';
import { pluralize } from '../utils/string';

export default function TeamsPage() {
  const { data: teams, isError } = useTeams();
  const [query, setQuery] = useState('');
  const sortedTeams = useMemo(
    () => teams?.sort((teamA, teamB) => teamB.id - teamA.id),
    [teams]
  );

  const filteredTeams = useMemo(() => {
    if (query.length < 2) return sortedTeams;

    const lowercasedQuery = query.toLowerCase();
    return sortedTeams.filter(team =>
      team.name?.toLowerCase().includes(lowercasedQuery)
    );
  }, [query, sortedTeams]);

  if (teams) {
    return (
      <>
        <PageTitle>Teams</PageTitle>

        <Text size="sm" c="dimmed" mb="xs">
          {pluralize(teams, 'team')}
        </Text>
        <TextInput
          mb="lg"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="search"
          icon={<CiSearch />}
        />

        {filteredTeams.length ? (
          filteredTeams.map(team => <TeamRow team={team} key={team.id} />)
        ) : (
          <Text>No teams to show</Text>
        )}
      </>
    );
  }

  if (isError) {
    return <Alert color="red">There was an error retrieving all teams</Alert>;
  }

  return <LoadingIndicator />;
}

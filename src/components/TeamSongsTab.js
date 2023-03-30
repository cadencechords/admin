import React from 'react';
import useTeamSongs from '../hooks/api/useTeamSongs';
import { Alert, Text } from '@mantine/core';
import LoadingIndicator from './LoadingIndicator';
import SongRow from './SongRow';
import { pluralize } from '../utils/string';

export default function TeamSongsTab({ team }) {
  const { data: songs, isError } = useTeamSongs(team.id);
  if (songs) {
    return (
      <div>
        <Text size="sm" c="dimmed" mb="xs">
          {pluralize(songs, 'song')}
        </Text>
        {songs.length === 0 ? (
          <Text>No songs to show</Text>
        ) : (
          songs.map(song => <SongRow song={song} key={song.id} />)
        )}
      </div>
    );
  }

  if (isError) {
    return (
      <Alert color="red">There was an issue retrieving this team's songs</Alert>
    );
  }
  return <LoadingIndicator />;
}

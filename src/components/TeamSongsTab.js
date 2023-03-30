import React from 'react';
import useTeamSongs from '../hooks/api/useTeamSongs';
import { Alert } from '@mantine/core';
import LoadingIndicator from './LoadingIndicator';
import SongRow from './SongRow';

export default function TeamSongsTab({ team }) {
  const { data: songs, isError } = useTeamSongs(team.id);
  if (songs) {
    return songs.map(song => <SongRow song={song} key={song.id} />);
  }

  if (isError) {
    return (
      <Alert color="red">There was an issue retrieving this team's songs</Alert>
    );
  }
  return <LoadingIndicator />;
}

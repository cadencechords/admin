export function getInitials(team) {
  const words = team.name?.split(' ');

  return words
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
}

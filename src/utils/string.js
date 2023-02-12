export function pluralize(array, name) {
  if (array?.length === 1) return `1 ${name}`;

  return `${array?.length} ${name}s`;
}

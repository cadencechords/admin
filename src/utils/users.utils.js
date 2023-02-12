export function getDisplayName(user) {
  if (hasName(user)) {
    return getFullName(user);
  } else {
    return user.email;
  }
}

export function getFullName(user) {
  if (hasName(user)) {
    return [user.first_name, user.last_name].join(' ');
  }

  return '';
}

export function hasName(user) {
  return user.last_name || user.first_name;
}

export function getInitials(user) {
  if (hasName(user)) {
    const initials = [user.first_name, user.last_name].map(name =>
      name?.charAt(0)
    );
    return initials.join('').toUpperCase();
  }

  return user.email?.charAt?.(0).toUpperCase();
}

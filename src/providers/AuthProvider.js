import { createContext, useState } from 'react';
import useCurrentUser from '../hooks/api/useCurrentUser';
import Credentials from '../utils/credentials';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const { isLoading, data } = useCurrentUser({
    enabled: !currentUser && Credentials.hasCredentials(),
    onSuccess: data => setCurrentUser(data),
  });

  return (
    <AuthContext.Provider
      {...props}
      value={{
        currentUser: data || currentUser,
        setCurrentUser,
        isLoading: isLoading && !currentUser,
      }}
    />
  );
}

import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Credentials from '../utils/credentials';

export default function useAuth() {
  const { currentUser, setCurrentUser, isLoading } = useContext(AuthContext);

  console.log({ isLoading });
  return {
    currentUser,
    isLoggedIn: !!currentUser,
    setCurrentUser,
    hasCredentials: Credentials.hasCredentials(),
    isLoading,
  };
}

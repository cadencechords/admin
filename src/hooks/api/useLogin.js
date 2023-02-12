import { useMutation } from '@tanstack/react-query';
import * as authApi from '../../api/auth.api';
import Credentials from '../../utils/credentials';
import useAuth from '../useAuth';

export default function useLogin({ onSuccess } = {}) {
  const { setCurrentUser } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async credentials => {
      return await authApi.login(credentials);
    },
    onSuccess: ({ headers, data }) => {
      Credentials.accessToken = headers['access-token'];
      Credentials.client = headers.client;
      Credentials.uid = headers.uid;
      setCurrentUser(data);

      localStorage.setItem('accessToken', Credentials.accessToken);
      localStorage.setItem('client', Credentials.client);
      localStorage.setItem('uid', Credentials.uid);
      onSuccess?.();
    },
  });

  return { run: mutate, isLoading, isError, error };
}

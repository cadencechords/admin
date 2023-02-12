import { useQuery } from '@tanstack/react-query';
import * as authApi from '../../api/auth.api';

export default function useCurrentUser({ onSuccess, enabled } = {}) {
  const { isLoading, data } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return (await authApi.getMe()).data;
    },
    enabled: !!enabled,
    onSuccess,
    retry: false,
  });
  return { isLoading, data };
}

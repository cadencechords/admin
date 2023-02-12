import { MantineProvider } from '@mantine/core';
import Routes from './Routes';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NotificationsProvider } from '@mantine/notifications';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          defaultRadius: 'xl',
          globalStyles: _ => ({
            input: {
              fontSize: '16px !important',
            },
          }),
        }}
      >
        <NotificationsProvider autoClose={1500}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

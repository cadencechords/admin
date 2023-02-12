import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import useLogin from '../hooks/api/useLogin';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { run: login, isLoading } = useLogin({
    onSuccess: () => {
      navigate('');
    },
  });
  const isValid = email && password;

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={theme => ({
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          mt="xl"
          disabled={!isValid}
          loading={isLoading}
          onClick={() => login({ email, password })}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
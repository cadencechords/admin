import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes as LibraryRoutes,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import useAuth from './hooks/useAuth';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import LoadingIndicator from './components/LoadingIndicator';
import TeamsPage from './pages/TeamsPage';
import TeamDetailPage from './pages/TeamDetailPage';

export default function Routes() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return <LoadingIndicator />;

  return (
    <Router>
      {isLoggedIn && (
        <Layout>
          <LibraryRoutes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id/:tab" element={<UserDetailPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:id/:tab" element={<TeamDetailPage />} />
            <Route path="" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </LibraryRoutes>
        </Layout>
      )}
      {!isLoggedIn && (
        <LibraryRoutes>
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginPage />} />
        </LibraryRoutes>
      )}
    </Router>
  );
}

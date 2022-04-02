import { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import RegisterPage from '../pages/auth/RegisterPage';
import SignInPage from '../pages/auth/SignInPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import PasswordsPage from '../pages/dashboard/passwordmanager/PasswordsPage';
import StatisticsPage from '../pages/dashboard/StatisticsPage';
import NotFoundPage from '../pages/NotFoundPage';
import WelcomePage from '../pages/WelcomePage';
import LoadingOverlay from '../sections/LoadingOverlay';

export default function Router() {
  const [user, authenticated, loading] = useAuth();

  if (loading == 'idle' || loading == 'loading') {
    return <LoadingOverlay />;
  }

  const authBasedRoutes = authenticated ? (
    <>
      {/* General */}
      <Route path={'/dashboard/home'} element={<DashboardPage />} />
      <Route path={'/dashboard/statistics'} element={<StatisticsPage />} />

      {/* Password Manager */}
      <Route path={'/dashboard/passwordmanager/passwords'} element={<PasswordsPage />} />

      <Route path={'*'} element={<Navigate to={'/dashboard/home'} />} />
    </>
  ) : (
    <>
      <Route path={'/signin'} element={<SignInPage />} />
      <Route path={'/register'} element={<RegisterPage />} />

      <Route path={'*'} element={<Navigate to={'/'} />} />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />

        {authBasedRoutes}
      </Routes>
    </BrowserRouter>
  );
}

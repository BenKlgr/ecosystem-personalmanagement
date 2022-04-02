import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
import useAuth from '../../../hooks/useAuth';
import DashboardLayout from '../../../layouts/DashboardLayout';
import LoadingOverlay from '../../../sections/LoadingOverlay';
import PasswordCollection from '../../../sections/passwordmanager/passwords/PasswordCollection';
import { useAppDispatch } from '../../../types/redux';

export default function PasswordsPage() {
  const [user] = useAuth();
  const dispatch = useAppDispatch();

  return (
    <DashboardLayout>
      <PageHeader title={'Passwords'} prevRoutes={['/']} />
      <PasswordCollection />
    </DashboardLayout>
  );
}

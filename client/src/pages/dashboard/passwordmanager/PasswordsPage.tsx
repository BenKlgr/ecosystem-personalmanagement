import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/pageheader/PageHeader';
import useAuth from '../../../hooks/useAuth';
import DashboardLayout from '../../../layouts/DashboardLayout';
import LoadingOverlay from '../../../sections/LoadingOverlay';
import PasswordCollection from '../../../sections/passwordmanager/passwords/PasswordCollection';
import { useAppDispatch } from '../../../types/redux';

export default function PasswordsPage() {
  const [user] = useAuth();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <PageHeader title={t('pages.passwordmanager.passwords.title')} prevRoutes={['/']} />
      <PasswordCollection />
    </DashboardLayout>
  );
}

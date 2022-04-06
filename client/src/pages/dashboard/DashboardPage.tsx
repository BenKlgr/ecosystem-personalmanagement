import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/pageheader/PageHeader';
import useAuth from '../../hooks/useAuth';
import DashboardLayout from '../../layouts/DashboardLayout';
import LoadingOverlay from '../../sections/LoadingOverlay';

export default function DashboardPage() {
  const [user] = useAuth();

  return (
    <DashboardLayout>
      <PageHeader title={'Dashboard'} prevRoutes={['/']} />
      <p>Welcome {user?.firstname}!</p>
    </DashboardLayout>
  );
}

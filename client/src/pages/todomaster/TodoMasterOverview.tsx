import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/pageheader/PageHeader';
import useAuth from '../../hooks/useAuth';
import DashboardLayout from '../../layouts/DashboardLayout';
import { RootState } from '../../redux/rootReducer';
import { GetTodoCollections } from '../../redux/slices/todomaster';
import LoadingOverlay from '../../sections/LoadingOverlay';
import PostponedTasks from '../../sections/todomaster/overview/PostponedTasks';
import { useAppDispatch, useAppSelector } from '../../types/redux';

export default function TodoMasterOverview() {
  const [user] = useAuth();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const todoCollections = useAppSelector(
    (state: RootState) => state.todoMaster.collections
  );
  const todoCollectionsLoading = useAppSelector(
    (state: RootState) => state.todoMaster.loading
  );

  useEffect(() => {
    dispatch(GetTodoCollections());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <PageHeader title={t('pages.todomaster.overview.title')} prevRoutes={['/']} />
      {todoCollectionsLoading == 'loading' ? (
        <LoadingOverlay />
      ) : (
        <>
          <PostponedTasks />
        </>
      )}
    </DashboardLayout>
  );
}

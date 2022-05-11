import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../../redux/rootReducer';
import { useAppSelector } from '../../../types/redux';

export default function PostponedTasks() {
  const { t } = useTranslation();

  const todoCollections = useAppSelector(
    (state: RootState) => state.todoMaster.collections
  );

  return (
    <Stack spacing={2}>
      <Typography variant={'h4'} color={'secondary'}>
        Aufgeschobene Aufgaben
      </Typography>
    </Stack>
  );
}

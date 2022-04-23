import { IconButton, Tooltip } from '@mui/material';
import { RootState } from '../../redux/rootReducer';
import { SetThemeMode } from '../../redux/slices/theme';
import { useAppDispatch, useAppSelector } from '../../types/redux';
import Iconify from '../Iconify';

export default function ThemeModeSwitch() {
  const themeMode = useAppSelector((state: RootState) => state.theme.mode);
  const dispatch = useAppDispatch();

  const toggleThemeMode = () => {
    dispatch(SetThemeMode(themeMode == 'light' ? 'dark' : 'light'));
  };

  return (
    <Tooltip title={themeMode == 'light' ? 'Switch to darkmode' : 'Switch to lightmode'}>
      <IconButton onClick={toggleThemeMode}>
        <Iconify icon={themeMode == 'light' ? 'ion:moon' : 'ion:sunny'} />
      </IconButton>
    </Tooltip>
  );
}

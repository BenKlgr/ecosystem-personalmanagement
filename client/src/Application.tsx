import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './router/Router';
import GlobalThemeStyles from './utils/theme/Global';
import { GetTheme } from './utils/theme/theme';
import Grow from '@material-ui/core/Grow';
import { useAppSelector } from './types/redux';
import { RootState } from './redux/rootReducer';

export default function Application() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemedApplication />
      </StyledEngineProvider>
    </Provider>
  );
}

function ThemedApplication() {
  const themeMode = useAppSelector((state: RootState) => state.theme.mode);

  return (
    <ThemeProvider theme={GetTheme(themeMode)}>
      <CssBaseline />
      <GlobalThemeStyles />

      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

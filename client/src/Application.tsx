import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './router/Router';
import GlobalThemeStyles from './utils/theme/Global';
import theme from './utils/theme/theme';

export default function Application() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalThemeStyles />
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

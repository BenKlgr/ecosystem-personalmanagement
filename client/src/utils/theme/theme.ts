import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/system';
import { ExtendedTheme } from '../../types/theme';
import breakpoints from './breakpoints';
import getOverrides from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

const themeOptions: ThemeOptions & any = {
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows,
  customShadows,
  breakpoints,
  customSpacing: {
    websiteTop: 8,
    innerPadding: 4,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 8,
  },
};

const theme = createTheme(themeOptions);
theme.components = getOverrides(theme as ExtendedTheme) as any;

export default theme;

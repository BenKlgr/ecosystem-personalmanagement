import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/system';
import { ExtendedTheme } from '../../types/theme';
import breakpoints from './breakpoints';
import getOverrides from './overrides';
import palette from './palette';
import { GetShadows } from './shadows';
import typography from './typography';

export function GetTheme(mode: string) {
  const p = palette(mode);

  const themeOptions: ThemeOptions & any = {
    palette: palette(mode),
    shape: { borderRadius: 8 },
    typography,
    shadows: GetShadows(p as any)[0],
    customShadows: GetShadows(p as any)[1],
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

  return theme;
}

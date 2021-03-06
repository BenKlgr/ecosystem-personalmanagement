import { alpha, Palette } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const PRIMARY = {
  lighter: '#85D4FF',
  light: '#33B8FF',
  main: '#0092E0',
  dark: '#006AA3',
  darker: '#00283D',
  contrastText: '#fff',
};
const SECONDARY = {
  lighter: '#9FD0A9',
  light: '#84C290',
  main: '#69B578',
  dark: '#51A461',
  darker: '#438951',
  contrastText: '#fff',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const palette = (mode: string) => {
  const isLight = mode == 'light';

  const GREY = isLight
    ? {
        0: '#FFFFFF',
        100: '#F9FAFB',
        200: '#F4F6F8',
        300: '#DFE3E8',
        400: '#C4CDD5',
        500: '#919EAB',
        600: '#637381',
        700: '#454F5B',
        800: '#212B36',
        900: '#161C24',
        500_8: alpha('#919EAB', 0.08),
        500_12: alpha('#919EAB', 0.12),
        500_16: alpha('#919EAB', 0.16),
        500_24: alpha('#919EAB', 0.24),
        500_32: alpha('#919EAB', 0.32),
        500_48: alpha('#919EAB', 0.48),
        500_56: alpha('#919EAB', 0.56),
        500_80: alpha('#919EAB', 0.8),
      }
    : {
        0: '#FFFFFF',
        100: '#F9FAFB',
        200: '#F4F6F8',
        300: '#DFE3E8',
        400: '#C4CDD5',
        500: '#919EAB',
        600: '#637381',
        700: '#485b66',
        800: '#212b36',
        900: '#161c24',
        500_8: alpha('#919EAB', 0.08),
        500_12: alpha('#919EAB', 0.12),
        500_16: alpha('#919EAB', 0.16),
        500_24: alpha('#919EAB', 0.24),
        500_32: alpha('#919EAB', 0.32),
        500_48: alpha('#919EAB', 0.48),
        500_56: alpha('#919EAB', 0.56),
        500_80: alpha('#919EAB', 0.8),
      };
  const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
  };
  const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
  };
  const SECONDARY = {
    lighter: GREY[400],
    light: GREY[500],
    main: GREY[600],
    dark: GREY[700],
    darker: GREY[800],
    contrastText: '#fff',
  };

  const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
  };

  return {
    mode,
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY[50024],
    text: {
      primary: isLight ? GREY[800] : GREY[300],
      secondary: isLight ? GREY[600] : GREY[300],
      disabled: isLight ? GREY[400] : GREY[700],
    },
    background: {
      paper: isLight ? '#fff' : GREY[800],
      default: isLight ? GREY[100] : GREY[900],
      neutral: isLight ? GREY[200] : GREY[800],
    },
    action: {
      active: GREY[600],
      hover: GREY[5008],
      selected: GREY[50016],
      disabled: GREY[50080],
      disabledBackground: GREY[50024],
      focus: GREY[50024],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };
};

export default palette;

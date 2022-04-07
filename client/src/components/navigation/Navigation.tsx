import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { SignOut } from '../../redux/slices/auth';
import { useAppDispatch } from '../../types/redux';
import { ExtendedTheme } from '../../types/theme';
import Iconify from '../Iconify';
import Logo from '../Logo';
import { alpha } from '@mui/material/styles';
import {
  NavigationRouteGroup,
  navigationRoutes,
  NavigationRoute as NavigationRouteType,
} from '../../utils/routes';

export default function Navigation() {
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    dispatch(SignOut());
  };

  return (
    <Stack
      sx={{
        width: '17.5rem',
        height: '100%',
        boxShadow: theme.customShadows.z16,
        borderRight: '2px solid transparent',
        borderRightColor: !isLight
          ? theme.palette.background.paper
          : theme.palette.background.default,
      }}
      spacing={4}>
      <Box
        sx={{
          textAlign: 'center',
          paddingTop: theme.customSpacing.websiteTop,
          paddingX: theme.customSpacing.innerPadding,
        }}>
        <Logo sx={{ fill: theme.palette.primary.main }} />
      </Box>
      <Stack sx={{ flex: 1 }} spacing={4}>
        {navigationRoutes.map((group: NavigationRouteGroup, index) => (
          <Stack spacing={1} key={index}>
            <Typography
              variant={'overline'}
              sx={{ paddingX: theme.customSpacing.innerPadding }}>
              {group.label}
            </Typography>
            <Stack spacing={0.5}>
              {group.routes.map((route: NavigationRouteType, index: number) => (
                <NavigationRoute
                  route={route}
                  activeRoute={location.pathname == route.route}
                  key={index}
                />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Box
        sx={{
          padding: theme.customSpacing.innerPadding,
        }}>
        <Stack direction={'row'} spacing={2}>
          <Button
            color={'inherit'}
            variant={'text'}
            fullWidth
            startIcon={<Iconify icon={'ion:log-out-outline'} />}
            onClick={handleSignOut}>
            Sign out
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

type NavigationRouteProps = {
  route: NavigationRouteType;
  activeRoute: boolean;
};
function NavigationRoute({ route, activeRoute }: NavigationRouteProps) {
  const theme: ExtendedTheme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route.route);
  };

  return (
    <Box>
      <Box
        sx={{
          marginX: theme.customSpacing.innerPadding / 2,
          paddingX: theme.customSpacing.innerPadding / 2,
          borderRadius: `${theme.shape.borderRadius}px`,
          paddingY: theme.spacing(),
          cursor: 'pointer',

          background: activeRoute ? alpha(theme.palette.primary.light, 0.1) : 'inherit',

          transition: 'background 250ms ease, color 250ms ease',

          '&:hover': activeRoute
            ? {}
            : {
                background: theme.palette.action.hover,
              },
        }}
        onClick={handleClick}>
        <Stack
          spacing={1}
          direction={'row'}
          alignItems={'center'}
          sx={{ opacity: activeRoute ? 1 : 0.8 }}>
          <Iconify
            icon={route.icon}
            sx={{
              height: '22px',
              width: '22px',
              color: activeRoute
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            }}
          />
          <Typography
            sx={{
              flex: 1,
              color: activeRoute
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            }}>
            {route.label}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

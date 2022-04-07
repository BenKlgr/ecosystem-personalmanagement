import { Box, Button, Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ExtendedTheme } from '../../types/theme';
import Logo from '../Logo';
import ThemeModeSwitch from '../theme/ThemeModeSwitch';

export default function StartNavigation() {
  const theme: ExtendedTheme = useTheme();
  const navigate = useNavigate();
  const [user, authenticated, loading, signOutFunction] = useAuth();

  return (
    <Stack direction={'row'} sx={{ paddingY: theme.customSpacing.innerPadding }}>
      <Logo sx={{ height: '2rem', fill: theme.palette.primary.main, flex: 1 }} />
      <Box>
        <Stack direction={'row'} spacing={2}>
          <ThemeModeSwitch />
          {authenticated ? (
            <>
              <Button
                variant={'text'}
                color={'inherit'}
                onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
              <Button
                variant={'outlined'}
                color={'inherit'}
                onClick={() => signOutFunction()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={'text'}
                color={'secondary'}
                onClick={() => navigate('/signin')}>
                Sign in
              </Button>
              <Button
                variant={'text'}
                color={'primary'}
                onClick={() => navigate('/register')}>
                Register
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

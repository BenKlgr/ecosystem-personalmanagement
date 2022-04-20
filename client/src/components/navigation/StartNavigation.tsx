import { Box, Button, Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ExtendedTheme } from '../../types/theme';
import Iconify from '../Iconify';
import Logo from '../Logo';
import ThemeModeSwitch from '../theme/ThemeModeSwitch';

export default function StartNavigation() {
  const theme: ExtendedTheme = useTheme();
  const navigate = useNavigate();
  const [user, authenticated, loading, signOutFunction] = useAuth();

  return (
    <Stack
      direction={['column', 'column', 'row', 'row']}
      sx={{ paddingY: theme.customSpacing.innerPadding }}>
      <Logo
        sx={{
          height: ['auto', 'auto', '2rem', '2rem'],
          width: ['50%', '50%', 'auto', 'auto'],
          fill: theme.palette.primary.main,
          flex: 1,
          margin: ['0 auto', '0 auto', 'inherit', 'inherit'],
        }}
      />
      <Box>
        <Stack
          direction={'row'}
          spacing={2}
          justifyContent={['center', 'center', 'inherit', 'inherit']}>
          <ThemeModeSwitch />
          {authenticated ? (
            <>
              <Button
                variant={'text'}
                color={'secondary'}
                onClick={() => navigate('/dashboard')}
                startIcon={<Iconify icon={'ion:home-outline'} />}>
                Dashboard
              </Button>
              <Button
                variant={'outlined'}
                color={'primary'}
                onClick={() => signOutFunction()}
                startIcon={<Iconify icon={'ion:log-out-outline'} />}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={'text'}
                color={'secondary'}
                onClick={() => navigate('/signin')}
                startIcon={<Iconify icon={'ion:log-in-outline'} />}>
                Sign in
              </Button>
              <Button
                variant={'text'}
                color={'primary'}
                onClick={() => navigate('/register')}
                startIcon={<Iconify icon={'ion:create-outline'} />}>
                Register
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

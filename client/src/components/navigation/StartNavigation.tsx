import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

export default function StartNavigation() {
  const [user, authenticated, loading] = useAuth();

  return (
    <Box>{authenticated ? <Box>{user?.firstname}</Box> : <Box>Sign in button</Box>}</Box>
  );
}

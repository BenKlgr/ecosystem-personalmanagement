import { Box, CircularProgress } from '@mui/material';

export default function LoadingOverlay() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CircularProgress />
    </Box>
  );
}

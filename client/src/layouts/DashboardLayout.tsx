import { Box, Card, Container, Stack, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import Navigation from '../components/navigation/Navigation';
import { ExtendedTheme } from '../types/theme';

type Props = {
  children: ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  const theme: ExtendedTheme = useTheme();

  return (
    <Stack direction={'row'} sx={{ height: '100%' }}>
      <Box sx={{ width: 'max-content' }}>
        <Navigation />
      </Box>
      <Box sx={{ flex: 1, paddingY: theme.customSpacing.websiteTop }}>
        <Container maxWidth={'xl'}>{children}</Container>
      </Box>
    </Stack>
  );
}

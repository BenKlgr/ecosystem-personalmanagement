import { Box, Card, Container, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { ExtendedTheme } from '../types/theme';

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  const theme: ExtendedTheme = useTheme();
  console.log(theme);

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Card
        sx={{
          boxShadow: theme.customShadows.z16,
          padding: '5rem 2.5rem',
          width: '30rem',
          minWidth: '30rem',
          maxWidth: '30rem',
        }}>
        {children}
      </Card>
    </Container>
  );
}

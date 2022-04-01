import {
  Box,
  Breadcrumbs,
  Typography,
  Link as RouterLink,
  useTheme,
  Stack,
  Avatar,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ExtendedTheme } from '../types/theme';
import { getRoute } from '../utils/routes';
import Iconify from './Iconify';
import UserControlPanel from './UserControlPanel';

type Props = {
  title: string;
  prevRoutes?: string[];
};
export default function PageHeader({ title, prevRoutes = [] }: Props) {
  const theme: ExtendedTheme = useTheme();

  const breadcrumbs = [
    ...prevRoutes.map((r) => {
      const route = getRoute(r);
      return (
        <RouterLink
          component={Link}
          to={route?.route ?? ''}
          color={'inherit'}
          sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          key={r}>
          <Iconify
            icon={route?.icon ?? ''}
            sx={{
              height: '16px',
              width: '16px',
              color: theme.palette.text.primary,
            }}
          />
          <Typography sx={{ marginLeft: 0.5 }}>{route?.label ?? r}</Typography>
        </RouterLink>
      );
    }),
    <Typography key={title} color={'text.primary'} sx={{ opacity: 1 }}>
      {title}
    </Typography>,
  ];

  return (
    <Box sx={{ marginBottom: theme.customSpacing.innerPadding }}>
      <Stack direction={'row'} sx={{ marginBottom: theme.customSpacing.websiteTop / 2 }}>
        <Typography variant={'h2'} sx={{ flex: 1 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <UserControlPanel />
        </Box>
      </Stack>
      <Card
        sx={{
          paddingX: theme.customSpacing.md,
          paddingY: theme.customSpacing.md / 2,
        }}>
        <Breadcrumbs separator='›' aria-label='breadcrumb'>
          {breadcrumbs}
        </Breadcrumbs>
      </Card>
    </Box>
  );
}

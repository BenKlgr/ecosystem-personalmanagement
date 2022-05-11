import {
  Box,
  Breadcrumbs,
  Typography,
  Link as RouterLink,
  useTheme,
  Stack,
  Avatar,
  Card,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ExtendedTheme } from '../../types/theme';
import { getRoute } from '../../utils/routes';
import Iconify from '../Iconify';
import PageHeaderSearch from './PageHeaderSearch';
import UserControlPanel from '../UserControlPanel';
import ThemeModeSwitch from '../util/ThemeModeSwitch';
import LanguageModeSwitch from '../util/LanguageModeSwitch';
import { useTranslation } from 'react-i18next';

type Props = {
  title: string;
  prevRoutes?: string[];
};
export default function PageHeader({ title, prevRoutes = [] }: Props) {
  const theme: ExtendedTheme = useTheme();
  const { t } = useTranslation();

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
          <Typography sx={{ marginLeft: 0.5 }}>
            {t(`navigation.routes.${route?.label ?? r}`)}
          </Typography>
        </RouterLink>
      );
    }),
    <Typography key={title} color={'text.primary'} sx={{ opacity: 1 }}>
      {title}
    </Typography>,
  ];

  return (
    <Box sx={{ marginBottom: theme.customSpacing.innerPadding }}>
      <Stack spacing={theme.customSpacing.innerPadding}>
        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <PageHeaderSearch />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <LanguageModeSwitch />
            <ThemeModeSwitch />
            <UserControlPanel />
          </Box>
        </Stack>
        <Typography variant={'h2'}>{title}</Typography>
        <Card
          sx={{
            paddingX: theme.customSpacing.md,
            paddingY: theme.customSpacing.md / 2,
          }}>
          <Breadcrumbs separator='›' aria-label='breadcrumb'>
            {breadcrumbs}
          </Breadcrumbs>
        </Card>
      </Stack>
    </Box>
  );
}

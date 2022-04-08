import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/system';
import FinancialDataSVG from '../../components/illustrations/FinancialDataSVG';
import { ExtendedTheme } from '../../types/theme';

export default function StartFinancialPreviewSection() {
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';

  return (
    <Box>
      <Container
        maxWidth={'xl'}
        sx={{
          paddingY: theme.customSpacing.innerPadding,
          background: isLight
            ? theme.palette.action.selected
            : theme.palette.action.hover,
          borderRadius: `${theme.shape.borderRadius}px`,
        }}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography variant={'h3'}>Wallet Tracking</Typography>
                <Typography variant={'overline'} color={'secondary'}>
                  ... is an financial management tool that includes the possibility to
                  analyse your personal financial behavior and save money by improving it.
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant={'h5'}>Features</Typography>
                <Typography color={'secondary'}>
                  <List>
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
                      praesentium libero nesciunt repellat itaque id delectus a.
                    </ListItem>
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
                      praesentium libero nesciunt repellat itaque id delectus a.
                    </ListItem>
                    <ListItem>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
                      praesentium libero nesciunt repellat itaque id delectus a.
                    </ListItem>
                  </List>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            sm={6}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: '25rem' }}>
              <FinancialDataSVG />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

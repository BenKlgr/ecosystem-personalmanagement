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
import TasksSVG from '../../components/illustrations/TasksSVG';
import { ExtendedTheme } from '../../types/theme';

export default function StartTasksPreviewSection() {
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';

  return (
    <Box>
      <Container
        maxWidth={'xl'}
        sx={{
          paddingY: theme.customSpacing.innerPadding,
        }}>
        <Grid container spacing={4}>
          <Grid
            item
            sm={6}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: '25rem' }}>
              <TasksSVG />
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography variant={'h3'}>To-Do Master</Typography>
                <Typography variant={'overline'} color={'secondary'}>
                  ... is the tool to go, if you want to organize your tasks. With an clear
                  list overview, you are able to manage everything very simple.
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
        </Grid>
      </Container>
    </Box>
  );
}

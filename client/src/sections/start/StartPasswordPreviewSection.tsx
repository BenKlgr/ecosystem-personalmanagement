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
import { ExtendedTheme } from '../../types/theme';

export default function StartPasswordPreviewSection() {
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
                <Typography variant={'h3'}>Smaller Features</Typography>
                <Typography variant={'overline'} color={'secondary'}>
                  There is a lot more in the Personal Management Tool, that you can
                  explore by yourself. I dont want to tell too much and kill the fun of
                  exploring new things.
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant={'h5'}>List (Spoiler Alert!)</Typography>
                <Typography color={'secondary'}>
                  <List>
                    <ListItem>There is an Password Manager integrated</ListItem>
                    <ListItem>
                      As you can see on this startpage, I added a complete dark mode, so
                      you dont get shocken when opening the page at night.
                    </ListItem>
                    <ListItem>... and much more. Have fun exploring.</ListItem>
                  </List>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography variant={'h3'}>Development information</Typography>
                <Typography variant={'overline'} color={'secondary'}>
                  A few things to the development process.
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant={'h4'}>I need your help</Typography>
                <Typography color={'secondary'}>
                  This project is quite small and has not that much to offer, but I hope
                  to make a really stable application, that suites the needs best. Right
                  now, I am developing this tool alone and would be happy about any
                  support in any way. For example: You could look trough my code base on
                  github and give me recommendations and suggestions for better code
                  writing. This would help me alot and earn you a place in the credits.{' '}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

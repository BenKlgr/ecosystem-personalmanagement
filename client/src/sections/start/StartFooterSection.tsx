import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/system';
import Iconify from '../../components/Iconify';
import { ExtendedTheme } from '../../types/theme';

export default function StartFooterSection() {
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';

  return (
    <Box>
      <Divider />
      <Container maxWidth={'xl'} sx={{ paddingY: theme.customSpacing.innerPadding }}>
        <Grid container color={theme.palette.secondary.main}>
          <Grid item sm={4}>
            <Typography variant={'overline'}>Interesting Links</Typography>
            <List>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  Sign In
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  Register Account
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  Code Base
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  Imprint
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={4}>
            <Typography variant={'overline'}>Social media</Typography>
            <List>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Iconify icon={'simple-icons:instagram'} />
                    <Typography>Instagram</Typography>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Iconify icon={'simple-icons:github'} />
                    <Typography>Github</Typography>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Iconify icon={'simple-icons:facebook'} />
                    <Typography>Facebook</Typography>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'asd'} color={'secondary'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Iconify icon={'simple-icons:linkedin'} />
                    <Typography>LinkedIn</Typography>
                  </Stack>
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={4}>
            ©️ Ben Klingeler
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

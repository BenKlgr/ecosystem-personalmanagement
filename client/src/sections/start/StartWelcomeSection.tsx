import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import { ExtendedTheme } from '../../types/theme';
// @ts-ignore
import previewImage from '../../resources/images/start/screenshot_preview.png';
// @ts-ignore
import BackgroundVector from '../../resources/images/start/background/world.svg?component';
import Iconify from '../../components/Iconify';

export default function StartWelcomeSection() {
  const [user, authenticated] = useAuth();
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';

  return (
    <Box>
      <Container maxWidth={'xl'}>
        <Box
          sx={{
            height: '100%',
            minHeight: 'calc(100vh - 105px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
          <Box
            component={BackgroundVector}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '0%',
              transform: 'translate(0%, -50%)',
              zIndex: 0 - 1,
              height: ['auto', 'auto', 'auto', '140%'],
              width: ['100%', '100%', '100%', 'auto'],
              fill: isLight ? theme.palette.action.selected : theme.palette.action.hover,
            }}
          />
          <Stack
            direction={['column', 'column', 'column', 'row']}
            sx={{
              height: '100%',
              minHeight: 'calc(100vh - 105px)',
              position: 'relative',
              overflow: 'hidden',
            }}
            spacing={8}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                marginLeft: '0px !important',
                textAlign: ['center', 'center', 'center', 'left'],
              }}>
              <Stack spacing={4}>
                <Typography variant={'h1'}>
                  Start to get more efficient and organized
                </Typography>
                <Typography variant={'h5'} color={'secondary'}>
                  Take the control over with the{' '}
                  <Typography variant={'h5'} color={'primary'} sx={{ display: 'inline' }}>
                    Personal Management Tool
                  </Typography>{' '}
                  and start to manage your <i>financial behavior</i>, your <i>tasks</i>{' '}
                  and <i>secret data</i> like a Pro.
                </Typography>
                <Stack
                  direction={'row'}
                  spacing={4}
                  justifyContent={['center', 'center', 'center', 'left']}>
                  <Button variant={'contained'}>Get started</Button>
                  <Button color={'secondary'}>Documentation</Button>
                </Stack>
                <Stack
                  direction={'row'}
                  spacing={2}
                  justifyContent={['center', 'center', 'center', 'left']}>
                  <Typography color={'secondary'}>Techstack</Typography>
                  <Tooltip title={'VSCode'}>
                    <Box>
                      <Iconify
                        icon={'vscode-icons:file-type-vscode'}
                        sx={{ height: '25px' }}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'Typescript'}>
                    <Box>
                      <Iconify
                        icon={'vscode-icons:file-type-typescript-official'}
                        sx={{ height: '25px' }}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'React JS'}>
                    <Box>
                      <Iconify
                        icon={'vscode-icons:file-type-reactjs'}
                        sx={{ height: '25px' }}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'Vite'}>
                    <Box>
                      <Iconify
                        icon={'vscode-icons:file-type-vite'}
                        sx={{ height: '25px' }}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'Git'}>
                    <Box>
                      <Iconify
                        icon={'vscode-icons:file-type-git'}
                        sx={{ height: '25px' }}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'NodeJS'}>
                    <Box>
                      <Iconify icon={'logos:nodejs-icon'} sx={{ height: '25px' }} />
                    </Box>
                  </Tooltip>
                  <Tooltip title={'Material UI'}>
                    <Box>
                      <Iconify icon={'logos:material-ui'} sx={{ height: '25px' }} />
                    </Box>
                  </Tooltip>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Stack spacing={4}>
                <Card
                  sx={{
                    height: ['15rem', '20rem', '25rem', '25rem'],
                    width: ['27.5rem', '35rem', '45rem', '45rem'],
                    background: '#fff',
                    position: 'relative',
                    boxShadow: theme.customShadows.z12,
                    margin: ['0 auto'],
                  }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '10px',
                      top: '10px',
                      zIndex: 10,
                    }}>
                    <Typography color={'secondary'} variant={'overline'}>
                      Demonstration Video
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '10px',
                      bottom: '10px',
                      zIndex: 10,
                    }}>
                    <Typography color={'secondary'} variant={'overline'}>
                      2:31
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      zIndex: 10,
                    }}>
                    <IconButton size={'large'}>
                      <Iconify icon={'ion:play'} sx={{ height: '100px' }} />
                    </IconButton>
                  </Box>
                  <Box
                    component={'img'}
                    src={previewImage}
                    sx={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      filter: 'blur(2px)',
                    }}
                  />
                </Card>
                <Typography
                  variant={'overline'}
                  color={'secondary'}
                  sx={{ opacity: 0.5, paddingX: theme.customSpacing.innerPadding }}>
                  Every experience can be different, because this tool is very
                  customizable. Please be aware
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

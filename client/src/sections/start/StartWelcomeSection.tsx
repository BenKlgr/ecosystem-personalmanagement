import { Box, Button, Card, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import { ExtendedTheme } from '../../types/theme';
// @ts-ignore
import previewImage from '../../resources/images/screenshot_preview.png';
// @ts-ignore
import BackgroundVector from '../../resources/images/background/world.svg?component';
import Iconify from '../../components/Iconify';

export default function StartWelcomeSection() {
  const [user, authenticated] = useAuth();
  const theme: ExtendedTheme = useTheme();
  const isLight = theme.palette.mode == 'light';

  return (
    <>
      <Stack
        direction={'row'}
        sx={{
          height: '100%',
          minHeight: '80vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        spacing={4}>
        <Box
          component={BackgroundVector}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0%',
            transform: 'translate(0%, -50%)',
            zIndex: 0 - 1,
            height: '140%',
            fill: isLight ? theme.palette.action.selected : theme.palette.action.hover,
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0px !important',
          }}>
          <Stack spacing={4}>
            <Typography variant={'h1'}>
              {/* {authenticated ? `Welcome ${user?.firstname}!` : 'Welcome!'} */}
              Start to get more efficient and organized
            </Typography>
            <Typography variant={'h5'} color={'secondary'}>
              Take the control over with the{' '}
              <Typography variant={'h5'} color={'primary'} sx={{ display: 'inline' }}>
                Personal Management Tool
              </Typography>{' '}
              and start to manage your <i>financial behauvior</i>, your <i>tasks</i> and{' '}
              <i>secret data</i> like a Pro.
            </Typography>
            <Stack direction={'row'} spacing={4}>
              <Button variant={'contained'}>Get started</Button>
              <Button color={'secondary'}>Documentation</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
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
                  <Iconify icon={'vscode-icons:file-type-vite'} sx={{ height: '25px' }} />
                </Box>
              </Tooltip>
              <Tooltip title={'Git'}>
                <Box>
                  <Iconify icon={'vscode-icons:file-type-git'} sx={{ height: '25px' }} />
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
                height: '25rem',
                width: '45rem',
                background: '#fff',
                position: 'relative',
                boxShadow: theme.customShadows.z12,
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
              This is an demonstration video of the Personal Management Tool. Every
              experience can be different as this tool is very customazible for the
              end-user. Please be aware of that.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

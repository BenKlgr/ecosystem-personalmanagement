import { Stack, SxProps, Typography } from '@mui/material';
import Iconify from '../Iconify';

type EmptyProps = {
  sx?: SxProps;
};
export default function Empty({ sx }: EmptyProps) {
  return (
    <Stack
      textAlign={'center'}
      sx={{ width: '100%', paddingY: 4, ...sx }}
      alignItems={'center'}
      spacing={2}>
      <Iconify icon={'ion:search-outline'} sx={{ width: '48px', height: '48px' }} />
      <Typography variant={'overline'}>There was no data found!</Typography>
    </Stack>
  );
}

import { Box, SxProps, Typography } from '@mui/material';

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  sx?: SxProps;
};
export default function Logo({ size = 'md', sx }: Props) {
  return (
    <Box sx={sx}>
      <Typography variant={'h3'} letterSpacing={'10px'}>
        BRAND
      </Typography>
    </Box>
  );
}

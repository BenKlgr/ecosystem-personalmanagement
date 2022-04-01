import { Box, SxProps, Typography } from '@mui/material';
// @ts-ignore
import LogoSvg from '../resources/images/Logo.svg?component';

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  sx?: SxProps;
};
export default function Logo({ size = 'md', sx }: Props) {
  return (
    <Box sx={sx}>
      <LogoSvg />
    </Box>
  );
}

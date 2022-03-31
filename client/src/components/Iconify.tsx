import { SxProps } from '@mui/material';
import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  sx?: SxProps;
};
export default function Iconify({ icon, sx }: Props) {
  return <Icon icon={icon} {...(sx as any)} />;
}

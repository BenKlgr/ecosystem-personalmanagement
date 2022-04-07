import { Container } from '@mui/material';
import StartNavigation from '../../components/navigation/StartNavigation';

export default function StartPage() {
  return (
    <>
      <Container maxWidth={'xl'}>
        <StartNavigation />
        <p>Welcome!</p>
      </Container>
    </>
  );
}

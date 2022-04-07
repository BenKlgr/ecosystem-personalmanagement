import { Container, Stack } from '@mui/material';
import StartNavigation from '../../components/navigation/StartNavigation';
import StartWelcomeSection from '../../sections/start/StartWelcomeSection';

export default function StartPage() {
  return (
    <>
      <Container maxWidth={'xl'}>
        <StartNavigation />
        <Stack>
          <StartWelcomeSection />
        </Stack>
      </Container>
    </>
  );
}

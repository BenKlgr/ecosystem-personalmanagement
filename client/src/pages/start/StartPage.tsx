import { Container, Stack } from '@mui/material';
import StartNavigation from '../../components/navigation/StartNavigation';
import StartFinancialPreviewSection from '../../sections/start/StartFinancialPreviewSection';
import StartFooterSection from '../../sections/start/StartFooterSection';
import StartWelcomeSection from '../../sections/start/StartWelcomeSection';
import StartTasksPreviewSection from '../../sections/start/StartTasksPreviewSection';
import StartPasswordPreviewSection from '../../sections/start/StartPasswordPreviewSection';

export default function StartPage() {
  return (
    <>
      <Container maxWidth={'xl'}>
        <StartNavigation />
      </Container>
      <Stack spacing={8}>
        <StartWelcomeSection />
        <StartFinancialPreviewSection />
        <StartTasksPreviewSection />
        <StartPasswordPreviewSection />

        <StartFooterSection />
      </Stack>
    </>
  );
}

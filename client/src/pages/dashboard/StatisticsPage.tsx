import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import PageHeader from '../../components/pageheader/PageHeader';
import useAuth from '../../hooks/useAuth';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function StatisticsPage() {
  const [user] = useAuth();

  return (
    <DashboardLayout>
      <PageHeader title={'Statistics'} prevRoutes={['/', '/dashboard/home']} />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Card>
            <CardHeader title={'Statistic'} />
            <CardContent>
              <Typography>1</Typography>
              <Typography>1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardHeader title={'Statistic'} />
            <CardContent>Content</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardHeader title={'Statistic'} />
            <CardContent>Content</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardHeader title={'Statistic'} />
            <CardContent>Content</CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

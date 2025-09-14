import { AppLayout } from '@cloudscape-design/components';
import Sidebar from './pages/Sidebar';
import StatisticsCard from './pages/StatisticsCard';
import DataTable from './pages/ApplicationsPage';

export default function App() {
  return (
    <AppLayout
      navigation={<Sidebar />}
      content={
        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Dashboard</h1>
          <StatisticsCard />
          <DataTable />
        </div>
      }
    />
  );
}

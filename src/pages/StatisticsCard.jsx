import { Box, Container, ColumnLayout } from '@cloudscape-design/components';

export default function StatisticsCard() {
  const stats = [
    { label: 'Items', value: '42' },
    { label: 'Something Else', value: '11' },
    { label: 'Another Item', value: '18' },
    { label: 'Size', value: '144' },
  ];

  return (
    <Box margin={{ bottom: 'xl' }} padding="l" border="rounded">
      <Container header={<h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Statistics</h2>}>
        <ColumnLayout columns={4} variant="text-grid">
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>{stat.label}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold',margin:'10px 0' }}>{stat.value}</div>
            </div>
          ))}
        </ColumnLayout>
      </Container>
    </Box>
  );
}

/* eslint-disable */

import React from 'react';
import { Box, SpaceBetween, Header, Button } from '@cloudscape-design/components';
import { useLocation, useNavigate } from 'react-router-dom';

function ViewDetailsPage() {
  const [location, navigate] = useLocation();
  const { application } = location.state || {};

  if (!application) {
    return (
      <Box padding="l">
        <Header variant="h1">No Application Selected</Header>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box padding="l">
      <Header variant="h1">Application Details</Header>
      <SpaceBetween size="m">
        {Object.entries(application).map(([key, value]) => (
          <Box key={key} padding="s" borderBottom="thin">
            <b>{key}:</b> {Array.isArray(value) ? value.join(', ') : value}
          </Box>
        ))}
      </SpaceBetween>
      <Box margin={{ top: 'l' }}>
        <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
      </Box>
    </Box>
  );
}

export default ViewDetailsPage;

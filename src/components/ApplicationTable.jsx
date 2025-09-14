/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Table, Button } from '@cloudscape-design/components';
import { getApplications } from '../services/applicationService';
import { useNavigate } from 'react-router-dom';

export default function ApplicationTable() {
  const [applications, setApplications] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getApplications().then(setApplications);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Applications</h1>

      <Table
        columnDefinitions={[
          { id: 'id', header: 'ID', cell: (item) => item.id },
          { id: 'name', header: 'Applicant Name', cell: (item) => item.applicant_name },
          { id: 'type', header: 'Type', cell: (item) => item.type },
          { id: 'status', header: 'Status', cell: (item) => item.status },
          { id: 'submittedAt', header: 'Submitted At', cell: (item) => item.submitted_at },
        ]}
        items={applications}
        selectionType="single"
        selectedItems={selectedItems}
        onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      />

      <Button
        variant="primary"
        disabled={selectedItems.length === 0}
        onClick={() => navigate(`/applications/${selectedItems[0].id}`)}
        // style={{ marginTop: '10px' }}
      >
        View
      </Button>
    </div>
  );
}

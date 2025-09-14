import { Table, Box, Button } from '@cloudscape-design/components';
import { useState } from 'react';
import ApplicationDetailsDialog from '../components/ApplicationDetails';

export default function DataTable() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const items = [
    { id: '0', name: 'Item 0', type: 'Type 0', status: 'warning', details: '0' },
    { id: '1', name: 'Item 1', type: 'Type 1', status: 'error', details: '10' },
    { id: '2', name: 'Item 2', type: 'Type 2', status: 'success', details: '20' },
    { id: '3', name: 'Item 3', type: 'Type 3', status: 'success', details: '30' },
    { id: '4', name: 'Item 4', type: 'Type 5', status: 'success', details: '40' },
    { id: '5', name: 'Item 5', type: 'Type 6', status: 'success', details: '40' },
    { id: '6', name: 'Item 6', type: 'Type 7', status: 'success', details: '40' },
    { id: '7', name: 'Item 7', type: 'Type 8', status: 'success', details: '40' },
  ];

  const handleViewDetails = () => {
      setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
    setSelectedApplication(null);
  };

  return (
    <Box padding="l" border="rounded">
      <Table
        columnDefinitions={[
          {
            id: 'action',
            header: '',
            cell: item => (
              <Button
                variant={selectedApplication?.id === item?.id ? 'primary' : 'normal'}
                shape="round"
                onClick={() => setSelectedApplication(item)}
              >
                •
              </Button>
            ),
          },
          { id: 'name', header: 'Name', cell: item => <a href="#">{item.name}</a> },
          { id: 'type', header: 'Type', cell: item => item.type },
          { id: 'status', header: 'Status', cell: item => item.status },
          { id: 'details', header: 'Details', cell: item => item.details },
        ]}
        items={items}
        selectionType="single"
        selectedItems={selectedItems}
        // onSelectionChange={({ detail }) => {
        //   const selectionArray = Array.isArray(detail.selectedItems) ? detail.selectedItems : [];
        //   console.log("selectionArray: ",selectionArray);          
        //   setSelectedItems(selectionArray);
        // }}
        stickyHeader
        ariaLabels={{
          selectionGroupLabel: 'Item selection',
          itemSelectionLabel: ({ name }) => `Select ${name}`,
        }}
        header={
          <Box float="right">
            <Button variant="primary" onClick={handleViewDetails}>View Details</Button>
          </Box>
        }
      />
      {selectedApplication && (
        <ApplicationDetailsDialog
          application={selectedApplication}
          visible={isDialogVisible}
          onClose={handleCloseDialog}
        />
      )}
    </Box>
  );
}

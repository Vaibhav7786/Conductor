/* eslint-disable */

import { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  SpaceBetween,
  FormField,
  Input,
  Header,
  Textarea,
  FileUpload
} from '@cloudscape-design/components';

export default function ApplicationDetailsDialog({ application, visible, onClose }) {
  const [comments, setComments] = useState('');
  const [files, setFiles] = useState([]); // initialize as empty array

  const handleApprove = () => {
    console.log('Approved:', application.id, 'Files:', files);
    onClose();
  };

  const handleReject = () => {
    console.log('Rejected:', application.id, 'Files:', files);
    onClose();
  };

  return (
    <Modal
      onDismiss={onClose}
      visible={visible}
      closeAriaLabel="Close modal"
      header={<Header variant="h2">Application Details</Header>}
    >
      <Box padding={{ bottom: 'l' }}>
        <SpaceBetween size="l">
          <FormField label="Application ID">
            <Input value={application?.id || ''} disabled />
          </FormField>
          <FormField label="Applicant Name">
            <Input value={application?.name || ''} disabled />
          </FormField>
          <FormField label="Application Type">
            <Input value={application?.type || ''} disabled />
          </FormField>
          <FormField label="Comments">
            <Textarea
              value={comments}
              onChange={({ detail }) => setComments(detail.value)}
            />
          </FormField>
          <FormField label="Upload Files">
            <FileUpload
              value={files || []}
              onChange={({ detail }) => setFiles(detail.files || [])}
            />
          </FormField>
          <SpaceBetween direction="horizontal" size="m">
            <Button variant="primary" onClick={handleApprove}>
              Approve
            </Button>
            <Button variant="normal" onClick={handleReject}>
              Reject
            </Button>
            <Button variant="link" onClick={onClose}>
              Close
            </Button>
          </SpaceBetween>
        </SpaceBetween>
      </Box>
    </Modal>
  );
}

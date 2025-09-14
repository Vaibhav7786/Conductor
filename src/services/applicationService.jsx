const mockApplications = [
  { id: '1', applicant_name: 'John Doe', type: 'Organization', status: 'Pending', submitted_at: '2025-09-13' },
  { id: '2', applicant_name: 'Jane Smith', type: 'Event', status: 'Approved', submitted_at: '2025-09-10' },
  { id: '3', applicant_name: 'Alice Johnson', type: 'Organization', status: 'Rejected', submitted_at: '2025-09-08' },
  { id: '4', applicant_name: 'Bob Williams', type: 'Event', status: 'Pending', submitted_at: '2025-09-07' },
  { id: '5', applicant_name: 'Charlie Brown', type: 'Organization', status: 'Pending', submitted_at: '2025-09-06' },
  { id: '6', applicant_name: 'Diana Prince', type: 'Event', status: 'Approved', submitted_at: '2025-09-05' },
  { id: '7', applicant_name: 'Edward Norton', type: 'Organization', status: 'Approved', submitted_at: '2025-09-04' },
  { id: '8', applicant_name: 'Fiona Gallagher', type: 'Event', status: 'Rejected', submitted_at: '2025-09-03' },
  { id: '9', applicant_name: 'George Clooney', type: 'Organization', status: 'Pending', submitted_at: '2025-09-02' },
  { id: '10', applicant_name: 'Hannah Montana', type: 'Event', status: 'Pending', submitted_at: '2025-09-01' },
  { id: '11', applicant_name: 'Ian Somerhalder', type: 'Organization', status: 'Approved', submitted_at: '2025-08-30' },
  { id: '12', applicant_name: 'Jessica Alba', type: 'Event', status: 'Pending', submitted_at: '2025-08-29' },
  { id: '13', applicant_name: 'Kevin Hart', type: 'Organization', status: 'Rejected', submitted_at: '2025-08-28' },
  { id: '14', applicant_name: 'Laura Dern', type: 'Event', status: 'Approved', submitted_at: '2025-08-27' },
  { id: '15', applicant_name: 'Michael Fassbender', type: 'Organization', status: 'Pending', submitted_at: '2025-08-26' },
  { id: '16', applicant_name: 'Natalie Portman', type: 'Event', status: 'Approved', submitted_at: '2025-08-25' },
  { id: '17', applicant_name: 'Oscar Isaac', type: 'Organization', status: 'Rejected', submitted_at: '2025-08-24' },
  { id: '18', applicant_name: 'Penelope Cruz', type: 'Event', status: 'Pending', submitted_at: '2025-08-23' },
];

export async function getApplications() {
  return new Promise((resolve) => setTimeout(() => resolve(mockApplications), 500));
}

export async function getApplicationById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockApplications.find((app) => app.id === id)), 500)
  );
}

export async function approveApplication(id) {
  console.log(`Application ${id} approved`);
  return { success: true };
}

export async function rejectApplication(id) {
  console.log(`Application ${id} rejected`);
  return { success: true };
}

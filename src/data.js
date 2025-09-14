export const mockApplications = [...Array(15).keys()].map(i => ({
    id: `${i + 1}`,
    applicant_name: `Applicant ${i + 1}`,
    type: i % 2 === 0 ? 'Organization' : 'Event',
    status: i % 3 === 0 ? 'Approved' : 'Pending',
    comments: `This is a comment for application ${i + 1}.`,
    files: [`file_${i + 1}.pdf`, `document_${i + 1}.docx`],
}));

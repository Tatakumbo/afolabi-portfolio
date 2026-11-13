import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

// TODO: replace the placeholder entries with your real education, experience and skills.
const sections = [
  {
    title: 'Education',
    entries: [{ heading: 'Federal Polytechnic, Ilaro', detail: 'OND, 2026' }],
  },
  {
    title: 'Experience',
    entries: [{ heading: 'Siwes, Prodigy School Suite', detail: 'Managed and setup Computer-Based Exams on School portal to ensure accuracy and data integrity, 2025' }],
  },
  {
    title: 'Skills',
    entries: [
      {
         heading: 'Technical', detail: 'React, TypeScript, Tailwind CSS, PHP, MySQL'
      },
      {
        heading: 'Document', detail:'Microsoft Word, Excel, Powerpoint'
      }
    ],
  },
];

export default function Resume() {
  return (
    <div className="py-8">

      <div className="flex items-start justify-between gap-4">
        <SectionHeading as="h1" title="Resume" description="Education, experience and skills." />
        <Button variant="primary" onClick={() => window.print()} className="print:hidden text-sm">
          Print / Save as PDF
        </Button>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 border-b border-border pb-1 text-lg font-semibold">{section.title}</h2>
            <ul className="space-y-3">
              {section.entries.map((entry) => (
                <li key={entry.heading}>
                  <p className="font-medium">{entry.heading}</p>
                  <p className="text-sm text-muted-foreground">{entry.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

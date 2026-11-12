import SectionHeading from '../components/ui/SectionHeading';

// TODO: replace the placeholder text and skills with your own.
const skills = ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'];

export default function About() {
  return (
    <div className="py-8">
      <SectionHeading as="h1" title="About me" description="A little about who I am and what I do." />

      <div className="max-w-prose space-y-4 leading-relaxed">
        <p>
          I'm Fola, a student and developer who enjoys building useful software. Replace this
          paragraph with your story: where you study, what got you into building things, and what
          you want to do next.
        </p>
        <p>
          Outside of coursework I work on personal projects and keep learning new tools. Add what you
          enjoy, what you're looking for (internship, freelance, collaboration) and how to reach you.
        </p>
      </div>

      <section className="mt-10">
        <SectionHeading title="Skills" />
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-md bg-muted px-3 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
4
import SectionHeading from '../components/ui/SectionHeading';
// import achievements from '../data/achievements.json';
// import type { Achievement } from '../types';

export default function Achievements() {
  // const items = [...(achievements as Achievement[])].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="py-8">
      <SectionHeading as="h1" title="Achievements" description="Milestones, awards and certificates." />
      <section className='flex items-center justify-between mx-auto mt-10 max-w-md'><div className='bg-foreground flex-1 h-px'></div><span className='text-sm px-4'>To be completed</span><div className='bg-foreground flex-1 h-px'></div></section>
      {/* <ol className="space-y-4 border-l border-border pl-6">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute top-2 -left-[29px] size-2 rounded-full bg-foreground" aria-hidden="true" />
            <p className="text-xs text-muted-foreground">{item.year}</p>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>  */}
    </div>
  );
}

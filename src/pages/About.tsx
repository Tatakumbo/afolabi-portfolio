import SectionHeading from '../components/ui/SectionHeading';

// TODO: replace the placeholder text and skills with your own.
const skills = ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'];

export default function About() {
  return (
    <div className="py-8">
      <SectionHeading as="h1" title="About me" description="A little about who I am and what I do." />

      <div className="max-w-prose space-y-4 leading-relaxed">
        <p className='text-justify'>
          I'm Fola, a student and developer who enjoys building useful software. I'm a <span className="emphasis">Full-Stack Developer</span> passionate about turning ideas into interactive, visually appealing and user-friendly web experiences.
        </p>
        <p>
          I enjoy building responsive websites, creating reusable componments, and bringing designs to life through code. My journey in web development is driven by curiosity, creativity, and a constant desire to improve my skills.
<br/><br/>
          I work with technologies like <span className="emphasis">HTML</span>, <span className="emphasis">CSS</span>, <span className="emphasis">TailwindCSS</span>, <span className="emphasis">Javascript</span>, <span className="emphasis">Typescript</span> and <span className="emphasis">React</span> while exploring modern tools and technologies to build better Web Applications, it is not just not about writing code, it is <span className="emphasis">Solving a Problem</span>, <span className="emphasis">Learning countinously</span> and <span className="emphasis">Creating a Digital Experience that makes a difference. </span>


           Outside of coursework I work on personal projects and keep learning new tools. I look forward to progressing through job opportunities, internship, freelance and collaboration.
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
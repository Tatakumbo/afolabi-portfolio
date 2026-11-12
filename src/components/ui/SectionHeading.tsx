type SectionHeadingProps = {
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
};

export default function SectionHeading({ title, description, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <Tag className="text-2xl font-semibold tracking-tight">{title}</Tag>
      {description && <p className="mt-1 text-muted-foreground">{description}</p>}
    </div>
  );
}
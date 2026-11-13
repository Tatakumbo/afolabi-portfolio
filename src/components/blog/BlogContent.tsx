export default function BlogContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 leading-relaxed">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}

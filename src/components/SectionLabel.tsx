// Small uppercase label used above each section, as on the director site.
export default function SectionLabel({
  children,
  as: Tag = "p",
  id,
  className = "",
}: {
  children: React.ReactNode;
  as?: "p" | "h2";
  id?: string;
  className?: string;
}) {
  return (
    <Tag id={id} className={`text-xs font-normal uppercase tracking-[0.25em] text-muted ${className}`}>
      {children}
    </Tag>
  );
}

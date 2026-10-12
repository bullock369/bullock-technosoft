type Props = { tag: string; title: React.ReactNode; text?: string; center?: boolean; };

export function SectionIntro({ tag, title, text, center = true }: Props) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <div className="sectionTag">{tag}</div>
      <h2 className="sectionTitle">{title}</h2>
      {text && <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: 720, margin: "14px auto 0", fontSize: 16 }}>{text}</p>}
    </div>
  );
}

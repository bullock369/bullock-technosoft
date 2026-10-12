import Link from "next/link";
import styles from "./PageHero.module.css";

type Props = { eyebrow: string; title: React.ReactNode; text: string; image?: string; };

export function PageHero({ eyebrow, title, text, image }: Props) {
  return (
    <section className={styles.hero} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(3,22,37,.95), rgba(3,22,37,.7)), url(${image})` } : undefined}>
      <div className="container">
        <div className={styles.content}>
          <div className="sectionTag">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><span>{typeof title === "string" ? title : "Page"}</span></div>
        </div>
      </div>
    </section>
  );
}

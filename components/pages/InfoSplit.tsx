import { CheckCircle2 } from "lucide-react";
import styles from "./InfoSplit.module.css";

type Props = { title: React.ReactNode; text: string; image: string; points: string[]; reverse?: boolean; };

export function InfoSplit({ title, text, image, points, reverse }: Props) {
  return (
    <div className={`${styles.grid} ${reverse ? styles.reverse : ""}`}>
      <div className={`${styles.image} hoverLift`}><img src={image} alt="Bullock TechnoSoft service"/></div>
      <div>
        <div className="sectionTag">BULLOCK TECHNOSOFT</div>
        <h2 className="sectionTitle">{title}</h2>
        <p className={styles.text}>{text}</p>
        <ul className={styles.points}>{points.map(x => <li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul>
      </div>
    </div>
  );
}

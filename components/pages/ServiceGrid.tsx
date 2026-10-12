import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import styles from "./ServiceGrid.module.css";

type Item = { title: string; icon: any; image: string; text: string; items: string[]; };

export function ServiceGrid({ items }: { items: Item[] }) {
  return (
    <div className={styles.grid}>
      {items.map((service, i) => {
        const Icon = service.icon;
        return (
          <article key={service.title} className={`${styles.card} hoverLift`} style={{animationDelay:`${i*.07}s`}}>
            <div className={styles.imageWrap}><img src={service.image} alt={service.title}/><div className={styles.icon}><Icon size={22}/></div></div>
            <div className={styles.body}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.items.map(x => <li key={x}><CheckCircle2 size={13}/>{x}</li>)}</ul>
              <Link href={service.title === "CCTV Solutions" ? "/cctv-solutions" : service.title === "Website Development" ? "/website-development" : "/contact-us"}>Get Quote <ArrowRight size={14}/></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

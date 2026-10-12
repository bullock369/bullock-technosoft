import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./ServicesPreview.module.css";
import { services } from "../../data/site";

export function ServicesPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <div className="sectionTag">OUR SERVICES</div>
          <h2 className="sectionTitle">What We <span>Offer</span></h2>
        </div>
        <div className={styles.grid}>
          {services.slice(0, 6).map((service, i) => {
            const Icon = service.icon;
            return (
              <article className={`${styles.card} hoverLift`} key={service.title} style={{ animationDelay: `${i * .08}s` }}>
                <div className={styles.icon}><Icon size={24}/></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.items.slice(0, 4).map(x => <li key={x}><CheckCircle2 size={13}/>{x}</li>)}</ul>
                <Link href={service.title === "CCTV Solutions" ? "/cctv-solutions" : service.title === "Website Development" ? "/website-development" : "/services"}>Explore <ArrowRight size={14}/></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

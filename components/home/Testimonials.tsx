import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";
import { testimonials } from "../../data/site";

export function Testimonials() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}><div className="sectionTag">CLIENT FEEDBACK</div><h2 className="sectionTitle">What Our <span>Clients Say</span></h2></div>
        <div className={styles.grid}>
          {testimonials.map(([text, name], i) => (
            <article key={name} className={`${styles.card} hoverLift`} style={{animationDelay:`${i*.1}s`}}>
              <div className={styles.stars}>{[1,2,3,4,5].map(x => <Star key={x} size={15} fill="currentColor"/>)}</div>
              <p>“{text}”</p><b>— {name}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

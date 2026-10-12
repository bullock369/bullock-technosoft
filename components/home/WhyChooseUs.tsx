
import { reasons } from "../../data/site";
import styles from "./WhyChooseUs.module.css";

export function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className="sectionTag">WHY CHOOSE US</div>
          <h2 className="sectionTitle">Why Choose <span>Bullock TechnoSoft?</span></h2>
        </div>
        <div className={styles.grid}>
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div className={`${styles.card} hoverLift`} key={title} style={{ animationDelay: `${i * .08}s` }}>
              {typeof Icon === "string" ? <div className={styles.rupee}>{Icon}</div> : <Icon size={34}/>}
              <h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { quickServices } from "../../data/site";
import styles from "./QuickServices.module.css";

export function QuickServices() {
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {quickServices.map(({ icon: Icon, title, text }, i) => (
          <div className={`${styles.card} hoverLift`} key={title} style={{ animationDelay: `${i * .1}s` }}>
            <Icon size={29}/>
            <div><b>{title}</b><span>{text}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

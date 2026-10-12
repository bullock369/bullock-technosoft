import { Camera, Laptop, MessageCircle, MonitorCog, Phone } from "lucide-react";
import styles from "./Hero.module.css";
import { COMPANY, phoneHref } from "../../lib/constants";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={`${styles.eyebrow} reveal`}>BULLOCK TECHNOSOFT</div>
        <h1 className="reveal revealDelay1">Computer, Laptop & CCTV Services in <span>Ahmedabad</span></h1>
        <p className="reveal revealDelay2">Reliable repair, installation, maintenance & IT solutions for home, shop and office.</p>
        <div className={`${styles.buttons} reveal revealDelay3`}>
          <a href={phoneHref} className="primaryButton"><Phone size={18}/> Call Now</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="outlineButton"><MessageCircle size={18}/> WhatsApp Us</a>
        </div>
        <div className={`${styles.offer} reveal revealDelay3`}>
          <small>FIRST CUSTOMER OFFER</small>
          <strong>20%</strong><b>OFF</b><span>ON YOUR FIRST SERVICE</span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.ring}/>
        <div className={`${styles.device} ${styles.laptop}`}><Laptop size={125}/></div>
        <div className={`${styles.device} ${styles.monitor}`}><MonitorCog size={130}/></div>
        <div className={`${styles.device} ${styles.camera}`}><Camera size={105}/></div>
        <div className={`${styles.device} ${styles.camera2}`}><Camera size={75}/></div>
      </div>
    </section>
  );
}

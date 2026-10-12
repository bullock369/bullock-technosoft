import { MessageCircle, Phone } from "lucide-react";
import styles from "./OfferBanner.module.css";
import { COMPANY, phoneHref } from "../../lib/constants";

export function OfferBanner() {
  return (
    <section className={styles.wrap}>
      <div className={styles.offer}><small>FIRST CUSTOMER</small><strong>20%</strong><b>OFF</b><span>ON FIRST SERVICE</span></div>
      <div><h3>Need Computer or CCTV Service?</h3><p>Get 20% OFF on your first service. Call or WhatsApp today!</p></div>
      <a href={phoneHref} className={styles.action}><Phone size={18}/><span><b>{COMPANY.phone}</b><small>Call Now</small></span></a>
      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className={`${styles.action} ${styles.whatsapp}`}><MessageCircle size={19}/> WhatsApp</a>
    </section>
  );
}

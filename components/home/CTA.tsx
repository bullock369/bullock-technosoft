import { MessageCircle, Phone } from "lucide-react";
import styles from "./CTA.module.css";
import { COMPANY, phoneHref } from "../../lib/constants";

export function CTA() {
  return (
    <section className={styles.section}>
      <div><h2>Have a Question or Need Support?</h2><p>We are here to help you!</p></div>
      <a href={phoneHref} className="primaryButton"><Phone size={18}/> Call {COMPANY.phone}</a>
      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="outlineButton"><MessageCircle size={18}/> WhatsApp Us</a>
    </section>
  );
}

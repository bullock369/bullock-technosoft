import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, phoneHref } from "../../lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  const serviceLinks = [
    ["/services", "Computer & Laptop"],
    ["/cctv-solutions", "CCTV Solutions"],
    ["/services", "Networking"],
    ["/website-development", "Website Development"],
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>BT</span>
            <span><b>Bullock</b><strong>TechnoSoft</strong><small>Technology You Can Trust</small></span>
          </Link>
          <p>Reliable computer, laptop, CCTV, networking and website solutions for homes, shops and offices.</p>
          <div className={styles.social}><span>f</span><span>◎</span><span>▶</span><span>◉</span></div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        <div className={styles.col}>
          <h4>Our Services</h4>
          {serviceLinks.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}
          <Link href="/services">Hardware & Software</Link>
        </div>

        <div className={styles.col}>
          <h4>Contact Us</h4>
          <a href={phoneHref}><Phone size={14}/> {COMPANY.phone}</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp</a>
          <span><MapPin size={14}/> {COMPANY.location}</span>
        </div>
      </footer>
      <div className={styles.copyright}>
        <span>© 2026 Bullock TechnoSoft. All Rights Reserved.</span>
        <span>Privacy Policy　|　Terms & Conditions</span>
      </div>
    </>
  );
}

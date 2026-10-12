import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, phoneHref } from "../../lib/constants";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

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
           <Link
  href="/"
  className={styles.logo}
>
  <img
    src="/logo.png"
    alt="Bullock TechnoSoft Logo"
    width="160"
    height="45"
  />
</Link>
          <p>Reliable computer, laptop, CCTV, networking and website solutions for homes, shops and offices.</p>
          
          <div className={styles.social}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> <FaFacebookF /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://wa.me/919998829141" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>

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

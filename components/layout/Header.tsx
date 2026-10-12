"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, phoneHref } from "../../lib/constants";
import styles from "./Header.module.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const links = [
  ["/", "Home"],
  ["/about-us", "About Us"],
  ["/services", "Services"],
  ["/cctv-solutions", "CCTV Solutions"],
  ["/website-development", "Website Development"],
  ["/contact-us", "Contact Us"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.topbar}>
        <span>◷ Mon - Sat: 10:00 AM - 8:00 PM</span>
        <span>Ahmedabad, Gujarat</span>

        <div className={styles.follow}>
          <span>Follow Us:</span>

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>

          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>

          <a href="https://wa.me/919998829141" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>

        {/* <span className={styles.follow}>Follow Us:　f　◎　▶　◉</span> */}
      </div>

      <header className={styles.header}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Bullock TechnoSoft Logo"
          />

        </Link>


        <nav className={styles.nav}>
          {links.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={phoneHref} className={styles.call}>
            <Phone size={16} />
            <span><b>{COMPANY.phone}</b><small>Call Us</small></span>
          </a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className={styles.whatsapp}>
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>

        <button className={styles.menuBtn} onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <a href={phoneHref} onClick={() => setOpen(false)}><Phone size={16} /> Call {COMPANY.phone}</a>
        <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          <MessageCircle size={16} /> WhatsApp Us
        </a>
      </div>
    </>
  );
}


import { Camera, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import styles from "./page.module.css";
import { Header } from "../../components/layout/Header";
import { PageHero } from "../../components/shared/PageHero";
import { InfoSplit } from "../../components/pages/InfoSplit";
import { SectionIntro } from "../../components/shared/SectionIntro";
import { cctvServices } from "../../data/site";
import { Footer } from "../../components/layout/Footer";
import { COMPANY, phoneHref } from "../../lib/constants";

export default function CCTVPage() {
  return <>
    <Header/>
    <PageHero eyebrow="CCTV SOLUTIONS" title={<>Complete <span style={{color:"var(--primary)"}}>CCTV Security</span> Solutions</>} text="Professional CCTV installation, repair, upgrades and maintenance for homes, shops and offices." image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1800&q=85"/>
    <main>
      <section className="section"><div className="container">
        <InfoSplit title={<>Secure Your Space With <span>Reliable CCTV</span></>} text="We provide end-to-end CCTV solutions based on your location, coverage needs and budget. We help with camera selection, installation, DVR/NVR setup and mobile viewing." points={cctvServices} image="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1100&q=85"/>
      </div></section>
      <section className={styles.services}><div className="container">
        <SectionIntro tag="CCTV SERVICES" title={<>Everything You Need For <span>Security</span></>}/>
        <div className={styles.grid}>{cctvServices.map((x,i)=><div key={x} className={`${styles.card} hoverLift`} style={{animationDelay:`${i*.06}s`}}><div><Camera size={23}/></div><h3>{x}</h3><p>Professional service with proper testing and setup.</p></div>)}</div>
      </div></section>
      <section className={styles.contactStrip}><div><h2>Need CCTV Installation?</h2><p>Call us for a site visit and quotation in Ahmedabad.</p></div><a href={phoneHref}><Phone size={18}/> {COMPANY.phone}</a><a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a></section>
    </main>
    <Footer/>
  </>;
}

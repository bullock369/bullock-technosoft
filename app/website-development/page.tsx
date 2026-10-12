
import { CheckCircle2, Code2, MessageCircle, Phone } from "lucide-react";
import styles from "./page.module.css";
import { Header } from "../../components/layout/Header";
import { PageHero } from "../../components/shared/PageHero";
import { InfoSplit } from "../../components/pages/InfoSplit";
import { SectionIntro } from "../../components/shared/SectionIntro";
import { Footer } from "../../components/layout/Footer";
import { websiteServices } from "../../data/site";
import { COMPANY, phoneHref } from "../../lib/constants";

export default function WebsiteDevelopmentPage() {
  return <>
    <Header/>
    <PageHero eyebrow="WEBSITE DEVELOPMENT" title={<>Modern <span style={{color:"var(--primary)"}}>Website Development</span></>} text="Responsive, clean and professional websites for businesses, shops, professionals and startups." image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1800&q=85"/>
    <main>
      <section className="section"><div className="container">
        <InfoSplit reverse title={<>Build A Website That <span>Works For Your Business</span></>} text="We create responsive websites with modern UI, clear calls-to-action and mobile-friendly layouts. You can choose a simple landing page or a complete business website." points={websiteServices} image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85"/>
      </div></section>
      <section className={styles.services}><div className="container">
        <SectionIntro tag="WHY A WEBSITE" title={<>Turn Your Business Online <span>Professionally</span></>}/>
        <div className={styles.grid}>
          {["Responsive Design","Fast & Clean UI","Business-focused Layout","Contact & WhatsApp Integration","SEO-friendly Structure","Easy Future Updates"].map((x,i)=><div className={`${styles.card} hoverLift`} key={x} style={{animationDelay:`${i*.07}s`}}><Code2 size={24}/><h3>{x}</h3><p>Designed to help your customers understand and contact your business easily.</p></div>)}
        </div>
      </div></section>
      <section className={styles.contactStrip}><div><h2>Want a Website for Your Business?</h2><p>Let's discuss your design, pages and budget.</p></div><a href={phoneHref}><Phone size={18}/> {COMPANY.phone}</a><a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a></section>
    </main>
    <Footer/>
  </>;
}

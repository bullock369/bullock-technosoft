

import { CTA } from "../../components/home/CTA";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { ServiceGrid } from "../../components/pages/ServiceGrid";
import { PageHero } from "../../components/shared/PageHero";
import { SectionIntro } from "../../components/shared/SectionIntro";
import { services } from "../../data/site";

export default function ServicesPage() {
  return <>
    <Header/>
    <PageHero eyebrow="OUR SERVICES" title={<>Complete <span style={{color:"var(--primary)"}}>IT Solutions</span></>} text="Computer, laptop, CCTV, networking, hardware and website solutions under one roof." image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85"/>
    <main className="section"><div className="container">
      <SectionIntro tag="WHAT WE OFFER" title={<>Professional Services For <span>Home & Business</span></>} text="Choose the service you need and contact us for a quick quotation."/>
      <div style={{marginTop:34}}><ServiceGrid items={services}/></div>
    </div></main>
    <CTA/>
    <Footer/>
  </>;
}

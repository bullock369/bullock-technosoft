import { CTA } from "../../components/home/CTA";
import { WhyChooseUs } from "../../components/home/WhyChooseUs";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { InfoSplit } from "../../components/pages/InfoSplit";
import { PageHero } from "../../components/shared/PageHero";


export default function AboutPage() {
  return <>
    <Header/>
    <PageHero eyebrow="ABOUT US" title={<>About <span style={{color:"var(--primary)"}}>Bullock TechnoSoft</span></>} text="Your trusted local partner for computer, laptop, CCTV, networking and website solutions in Ahmedabad." image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"/>
    <main>
      <section className="section"><div className="container"><InfoSplit title={<>Technology Solutions <span>With Trust</span></>} text="We focus on practical, reliable and affordable technology services for homes, shops and offices. From repairing a laptop to installing a complete CCTV system or creating a business website, our goal is simple: quality work and happy customers." points={["Experienced technicians and developers","Transparent and affordable pricing","Fast response and professional work","Quality products and practical solutions","Customer support after service"]} image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=85"/></div></section>
      <WhyChooseUs/>
      <CTA/>
    </main>
    <Footer/>
  </>;
}

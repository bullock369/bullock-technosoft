import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./AboutPreview.module.css";

export function AboutPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.photo} hoverLift`}>
            <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=85" alt="Computer service"/>
            <div className={styles.badge}><strong>07+</strong><span>Years of<br/>Experience</span></div>
          </div>
          <div>
            <div className="sectionTag">ABOUT US</div>
            <h2 className="sectionTitle">We Provide Quality <span>Technology Services</span></h2>
            <p className={styles.text}>Bullock TechnoSoft helps homes, shops and offices with dependable computer, laptop, CCTV, networking and website solutions in Ahmedabad.</p>
            <ul>
              {["Experienced Technicians", "Genuine & Quality Solutions", "Quick Response", "Affordable Pricing", "Customer Satisfaction"].map(x => <li key={x}><CheckCircle2 size={16}/>{x}</li>)}
            </ul>
            <Link href="/about-us" className="primaryButton">Know More <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

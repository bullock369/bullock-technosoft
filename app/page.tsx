// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Hero } from "@/components/home/Hero";
// import { QuickServices } from "@/components/home/QuickServices";
// import { AboutPreview } from "@/components/home/AboutPreview";
// import { WhyChooseUs } from "@/components/home/WhyChooseUs";
// import { ServicesPreview } from "@/components/home/ServicesPreview";
// import { OfferBanner } from "@/components/home/OfferBanner";
// import { Testimonials } from "@/components/home/Testimonials";
// import { CTA } from "@/components/home/CTA";


import { AboutPreview } from "../components/home/AboutPreview";
import { CTA } from "../components/home/CTA";
import { Hero } from "../components/home/Hero";
import { OfferBanner } from "../components/home/OfferBanner";
import { QuickServices } from "../components/home/QuickServices";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { Testimonials } from "../components/home/Testimonials";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export default function HomePage() {
  return <>
    <Header/>
    <main>
      <Hero/>
      <QuickServices/>
      <AboutPreview/>
      <WhyChooseUs/>
      <ServicesPreview/>
      <OfferBanner/>
      <Testimonials/>
      <CTA/>
    </main>
    <Footer/>
  </>;
}

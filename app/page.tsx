import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RevealOnScroll>
        <Stats />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Services />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <HowItWorks />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <FAQ />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <ContactForm />
      </RevealOnScroll>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

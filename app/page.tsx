import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ScrollStory from '@/components/ScrollStory'
import WinnerBlocks from '@/components/WinnerBlocks'
import LogoCarousel from '@/components/LogoCarousel'
import ProjectReel from '@/components/ProjectReel'
import SinopMapDynamic from '@/components/SinopMapDynamic'
import Testimonials from '@/components/Testimonials'
import RentalBlock from '@/components/RentalBlock'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* 01 — Hero cinematográfico */}
      <Hero />

      {/* 02 — Contadores animados */}
      <Stats />

      {/* 03 — Scroll Story (Apple-style) */}
      <ScrollStory />

      {/* 04 — Blocos Líder (JinkoSolar-style) */}
      <WinnerBlocks />

      {/* 05A — Logo Carousel */}
      <LogoCarousel />

      {/* 05B — Reel de fotos */}
      <ProjectReel />

      {/* 05C — Mapa interativo */}
      <SinopMapDynamic />

      {/* 06 — Depoimentos */}
      <Testimonials />

      {/* 07 — Energia por Assinatura */}
      <RentalBlock />

      {/* 08 — FAQ + Contato */}
      <FAQ />
      <ContactForm />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

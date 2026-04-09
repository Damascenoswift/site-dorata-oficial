import Navbar from '@/components/Navbar'
import ElectricMobility from '@/components/ElectricMobility'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function NossosProdutosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="pt-36 pb-12 border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1200px] px-6">
          <span className="section-chip mb-4 block w-fit">Nossos Produtos</span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-bold text-white leading-tight tracking-[-0.02em]">
            Soluções Dorata para geração e <span className="text-yellow-400">mobilidade elétrica</span>
          </h1>
          <p className="text-white/55 mt-5 max-w-3xl leading-relaxed">
            Conheça as soluções da Dorata para sua casa, empresa ou condomínio, com atendimento técnico local e
            execução completa.
          </p>
        </div>
      </section>

      <ElectricMobility />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

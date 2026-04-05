import { logoClients } from '@/lib/clients-data'

const half = Math.ceil(logoClients.length / 2)
const row1 = logoClients.slice(0, half)
const row2 = logoClients.slice(half)

function LogoRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className={`flex gap-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white/5 border border-white/[0.08] rounded-xl px-5 py-3 text-sm font-semibold text-white/70 whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Quem já economiza com a Dorata</p>
        <h2 className="font-display text-3xl font-black text-white">
          <span className="text-yellow-400">37 empresas</span> em Sinop já economizando
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <LogoRow items={row1} />
        <LogoRow items={row2} reverse />
      </div>
    </section>
  )
}

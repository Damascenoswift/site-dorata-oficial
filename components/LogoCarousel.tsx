import Image from 'next/image'

const logoClients = [
  "/images/logos_clean/logo_01_Im4.png",
  "/images/logos_clean/logo_03_Im6.png",
  "/images/logos_clean/logo_05_Im8.png",
  "/images/logos_clean/logo_07_Im10.png",
  "/images/logos_clean/logo_09_Im12.png",
  "/images/logos_clean/logo_11_Im14.png",
  "/images/logos_clean/logo_13_Im16.png",
  "/images/logos_clean/logo_15_Im18.png",
  "/images/logos_clean/logo_17_Im20.png",
  "/images/logos_clean/logo_19_Im22.png",
  "/images/logos_clean/logo_21_Im24.png",
  "/images/logos_clean/logo_23_Im26.png",
  "/images/logos_clean/logo_25_Im28.png",
  "/images/logos_clean/logo_27_Im30.png",
  "/images/logos_clean/logo_29_Im32.png",
  "/images/logos_clean/logo_31_Im34.png",
  "/images/logos_clean/logo_33_Im36.png",
  "/images/logos_clean/logo_35_Im38.png",
  "/images/logos_clean/logo_37_Im40.png",
  "/images/logos_clean/logo_39_Im42.png",
  "/images/logos_clean/logo_41_Im44.png",
  "/images/logos_clean/logo_43_Im46.png",
  "/images/logos_clean/logo_45_Im48.png",
  "/images/logos_clean/logo_47_Im50.png",
  "/images/logos_clean/logo_49_Im52.png",
  "/images/logos_clean/logo_51_Im54.png",
  "/images/logos_clean/logo_53_Im56.png",
  "/images/logos_clean/logo_55_Im58.png",
  "/images/logos_clean/logo_57_Im60.png",
  "/images/logos_clean/logo_59_Im62.png",
  "/images/logos_clean/logo_60_Im63.png",
  "/images/logos_clean/logo_63_Im66.png",
  "/images/logos_clean/logo_65_Im68.png",
  "/images/logos_clean/logo_67_Im70.png",
  "/images/logos_clean/logo_69_Im72.png",
  "/images/logos_clean/logo_71_Im74.png",
  "/images/logos_clean/logo_73_Im76.png",
]

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
        {doubled.map((logoSrc, i) => (
          <div
            key={i}
            className="group flex-shrink-0 h-[76px] w-[190px] rounded-xl px-4 py-3 flex items-center justify-center bg-[#0d0d0d] border border-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:border-white/[0.14] transition-colors"
          >
            <div className="relative h-full w-full">
              <Image
                src={logoSrc}
                alt="Logo de cliente Dorata"
                fill
                sizes="190px"
                className="object-contain logo-mono-image"
              />
            </div>
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

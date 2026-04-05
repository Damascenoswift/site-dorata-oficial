'use client'

import dynamic from 'next/dynamic'

const SinopMap = dynamic(() => import('./SinopMap'), {
  ssr: false,
  loading: () => (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-96 bg-white/5 rounded-2xl animate-pulse" />
      </div>
    </section>
  ),
})

export default SinopMap

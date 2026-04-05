'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/projects-data'

export default function ProjectReel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const project = projects[current]

  return (
    <section className="py-16 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Nossas obras</p>
          <h2 className="font-display text-3xl font-black text-white">
            Instalações reais, em <span className="text-yellow-400">Sinop</span>
          </h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-video bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 8, ease: 'linear' }}
              >
                <Image
                  src={project.imagePath}
                  alt={`Usina ${project.company}`}
                  fill
                  className="object-cover"
                  priority={current === 0}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                />
              </div>

              <div className="absolute top-4 right-5 text-white/50 text-sm font-mono">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{project.location}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white">{project.company}</h3>
                </div>
                <div className="bg-yellow-400 rounded-xl px-4 py-2 text-center">
                  <div className="text-black font-black text-xs tracking-wider">DORATA</div>
                  <div className="text-black font-black text-sm">SOLAR ⚡</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

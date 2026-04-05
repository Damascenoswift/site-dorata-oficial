'use client'
import { useEffect, useRef } from 'react'
import { clients } from '@/lib/clients-data'

const typeColors: Record<string, string> = {
  comercial: '#facc15',
  industria: '#f97316',
  saude: '#60a5fa',
  alimentacao: '#4ade80',
  servicos: '#a78bfa',
}

const typeLabels: Record<string, string> = {
  comercial: 'Comercial',
  industria: 'Indústria',
  saude: 'Saúde',
  alimentacao: 'Alimentação',
  servicos: 'Serviços',
}

export default function SinopMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    import('leaflet').then(L => {
      const LDefault = L.default

      delete (LDefault.Icon.Default.prototype as any)._getIconUrl
      LDefault.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      const map = LDefault.map(mapRef.current!, {
        center: [-11.8600, -55.5050],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      LDefault.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      clients.forEach(client => {
        const color = typeColors[client.type] || '#facc15'

        const icon = LDefault.divIcon({
          className: '',
          html: `<div style="width:14px;height:14px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 0 4px ${color}30,0 0 10px ${color}60;"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })

        LDefault.marker([client.lat, client.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:Inter,sans-serif;padding:4px;"><strong style="color:${color};font-size:14px;">${client.name}</strong><div style="color:#9ca3af;font-size:12px;margin-top:4px;">${typeLabels[client.type]} · Sinop, MT</div></div>`,
            { className: 'dorata-popup', maxWidth: 200 }
          )
      })
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Nossa presença</p>
              <h2 className="font-display text-3xl font-black text-white leading-tight">
                Cada pin é uma<br />empresa que<br />
                <span className="text-yellow-400">economiza todo mês.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {Object.entries(typeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-white/60 text-sm">{typeLabels[type]}</span>
                  <span className="text-white/30 text-sm ml-auto">
                    {clients.filter(c => c.type === type).length}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 text-sm text-yellow-400/80">
              📍 Você provavelmente já entrou em uma dessas empresas.
            </div>
          </div>

          <div className="md:col-span-2">
            <div
              ref={mapRef}
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

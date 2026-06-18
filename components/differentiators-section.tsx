'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"
const comparisons = [
  {
    us: 'Especialistas en periodoncia',
    others: 'Tratamientos generales',
  },
  {
    us: 'Tecnología láser avanzada',
    others: 'Métodos tradicionales',
  },
  {
    us: 'Atención empática y personalizada',
    others: 'Atención impersonal',
  },
  {
    us: 'Diagnóstico digital 3D',
    others: 'Diagnóstico convencional',
  },
  {
    us: 'Enfoque preventivo y estético',
    others: 'Solo tratamiento reactivo',
  },
  {
    us: 'Recuperación más rápida',
    others: 'Recuperaciones más lentas',
  },
]

export function DifferentiatorsSection() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "url('/clinica-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/65" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra diferencia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            ¿Por qué elegir periodoncia láser{' '}
            <span className="text-primary">especializada</span>?
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl shadow-primary/10 overflow-hidden border border-border"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2 md:grid-cols-2">
            <div className="bg-primary p-4 lg:p-6 text-center">
              <h3 className="font-heading text-lg lg:text-xl font-bold text-white">
                Periodoncia Láser
              </h3>
              <p className="text-white/80 text-sm mt-1">Nuestra clínica</p>
            </div>
            <div className="bg-muted p-4 lg:p-6 text-center">
              <h3 className="font-heading text-lg lg:text-xl font-bold text-muted-foreground">
                Tratamiento Tradicional
              </h3>
              <p className="text-muted-foreground/70 text-sm mt-1">Otras clínicas</p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-border">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-2"
              >
                <div className="flex items-center gap-3 p-4 lg:p-5 bg-primary/5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm lg:text-base">
                    {item.us}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 lg:p-5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground text-sm lg:text-base">
                    {item.others}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <CTAButton>Agenda tu valoración hoy</CTAButton>
        </motion.div>
      </div>
    </section>
  )
}

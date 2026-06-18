'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Droplets, 
  Flame, 
  Move3D, 
  Frown, 
  Wind, 
  Utensils,
  AlertTriangle
} from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"

const painPoints = [
  {
    icon: Droplets,
    title: 'Sangrado de encías',
    description: 'Notas sangre al cepillarte o al usar hilo dental',
  },
  {
    icon: Flame,
    title: 'Inflamación constante',
    description: 'Encías rojas, hinchadas y sensibles',
  },
  {
    icon: Move3D,
    title: 'Dientes flojos',
    description: 'Sientes movimiento en uno o más dientes',
  },
  {
    icon: Frown,
    title: 'Miedo al odontólogo',
    description: 'Evitas ir al dentista por temor al dolor',
  },
  {
    icon: Wind,
    title: 'Mal aliento persistente',
    description: 'Halitosis que no mejora con higiene',
  },
  {
    icon: Utensils,
    title: 'Dolor al comer',
    description: 'Molestias al masticar o sensibilidad extrema',
  },
]

export function PainPointsSection() {
  return (
    <section className="py-10 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Señales de alerta</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto text-balance">
            Ignorar las señales hoy puede hacer que{' '}
            <span className="text-primary">pierdas tus dientes</span> mañana
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            ¿Te identificas con alguno de estos síntomas? No estás solo, y hay solución.
          </p>
        </motion.div>

        {/* Pain Points + Image Placeholder */}
        <div className="grid gap-8 lg:grid-cols-1 mb-12">
         

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] border border-border bg-white overflow-hidden"
          >
            <Image
              src="/sintomas.png"
              alt="Dolor dental"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <CTAButton >
              Agenda tu Valoración
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}

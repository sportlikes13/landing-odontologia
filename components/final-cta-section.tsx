'use client'

import { motion } from 'framer-motion'
import { Check, Shield, Clock, Award } from 'lucide-react'
import { ContactForm } from './contact-form'
import Image from 'next/image'

const benefits = [
  'Valoración completa con diagnóstico 3D',
  'Plan de tratamiento personalizado',
  'Presupuesto sin compromiso',
  'Opciones de financiación disponibles',
]

const trustBadges = [
  { icon: Shield, label: '+20 años experiencia' },
  { icon: Clock, label: 'Respuesta en 24h' },
  { icon: Award, label: 'Tecnología láser' },
]

export function FinalCTASection() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Da el primer paso
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
                Recupera tu sonrisa con{' '}
                <span className="text-primary">atención especializada</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No esperes a que sea demasiado tarde. Agenda tu valoración periodontal y descubre cómo podemos ayudarte a conservar tus dientes y mejorar tu calidad de vida.
              </p>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/sonrisa-hombre.png"
                  alt="diseño de sonrisa"
                  width={1200}
                  height={900}
                  className="object-cover w-full h-auto mt-5"
                  priority
                />
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary-dark" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
           
          >
            <ContactForm variant="final" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

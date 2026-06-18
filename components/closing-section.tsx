'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"
export function ClosingSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-secondary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Tus encías no van a mejorar solas…{' '}
              <span className="text-primary">pero todavía puedes actuar hoy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Recupera la salud de tus encías, reduce molestias y conserva tus dientes con un tratamiento especializado y menos invasivo.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-4"
          >
                         
            <CTAButton> Agenda tu valoración periodontal </CTAButton>
            <p className="text-muted-foreground text-sm mt-4">
              Sin compromiso • Respuesta en menos de 24 horas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

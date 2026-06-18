'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Clock, 
  Heart, 
  Smile, 
  ScanLine, 
  Users 
} from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"

const benefits = [
  {
    icon: Sparkles,
    title: 'Conserva tus dientes naturales',
    description: 'Tratamientos diseñados para preservar tu dentadura original el mayor tiempo posible.',
  },
  {
    icon: Clock,
    title: 'Recuperación más rápida',
    description: 'La tecnología láser minimiza el tiempo de sanación y permite volver antes a tu rutina.',
  },
  {
    icon: Heart,
    title: 'Menos dolor',
    description: 'Procedimientos mínimamente invasivos que reducen significativamente las molestias.',
  },
  {
    icon: Smile,
    title: 'Recupera seguridad al sonreír',
    description: 'Vuelve a mostrar tu sonrisa sin vergüenza ni incomodidad social.',
  },
  {
    icon: ScanLine,
    title: 'Diagnósticos precisos',
    description: 'Tecnología digital 3D que permite identificar problemas con máxima exactitud.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades.',
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-12 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-medium mb-4">
            Beneficios del tratamiento
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto text-balance">
            Todo lo que ganas al elegir{' '}
            <span className="text-primary">periodoncia láser</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-3xl p-6 lg:p-8 border border-border group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-full h-14 rounded-2xl bg-white to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
           <CTAButton >
                          Hablar con un especialista
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}

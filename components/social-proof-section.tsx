'use client'

import { motion } from 'framer-motion'
import { Award, Zap, HeartPulse, Users } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '+20',
    label: 'años de experiencia',
    description: 'Trayectoria comprobada en periodoncia especializada',
  },
  {
    icon: Zap,
    value: '100%',
    label: 'tecnología láser',
    description: 'Equipos de última generación para tratamientos precisos',
  },
  {
    icon: HeartPulse,
    value: 'Menos',
    label: 'invasivo',
    description: 'Recuperación más rápida y menor dolor postoperatorio',
  },
  {
    icon: Users,
    value: 'Atención',
    label: 'especializada',
    description: 'Enfoque empático para pacientes con ansiedad dental',
  },
]

export function SocialProofSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Confianza respaldada por resultados
          </h2>
        </motion.div>

        
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-primary w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-primary rounded-2xl p-6  hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-primary-foreground text-sm">
                    {stat.label}
                  </div>
                  <p className="text-primary-foreground text-sm mt-4 leading-relaxed">
                {stat.description}
              </p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
    </section>
  )
}

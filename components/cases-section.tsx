'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Calendar, Smile } from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const cases = [
  {
    id: 1,
    patientName: 'Carlos Mendez',
    patientImage: 'https://i.pravatar.cc/150?u=ana-gomez',
    problem: 'Sangrado constante y encías inflamadas',
    transformation: 'Tratamiento láser de 4 sesiones',
    result: 'Encías sanas y sin sangrado en 6 semanas',
    metrics: [
      { label: 'Reducción inflamación', value: '95%' },
      { label: 'Tiempo de tratamiento', value: '4 semanas' },
    ],
    badge: 'Recuperación total',
  },
  {
    id: 2,
    patientName: 'Maria Ruiz',
    patientImage: 'https://i.pravatar.cc/150?u=carlos-mendez',
    problem: 'Dientes flojos por pérdida ósea avanzada',
    transformation: 'Regeneración tisular con láser y bioestimulación',
    result: 'Estabilización dental y recuperación de función masticatoria',
    metrics: [
      { label: 'Estabilidad dental', value: '100%' },
      { label: 'Recuperación ósea', value: '70%' },
    ],
    badge: 'Caso complejo',
  },
  {
    id: 3,
    patientName: 'Mario Gomez',
    patientImage: 'https://i.pravatar.cc/150?u=maria-ruiz',
    problem: 'Miedo extremo al odontólogo desde la infancia',
    transformation: 'Tratamiento con sedación consciente y láser sin dolor',
    result: 'Primera visita dental completa sin ansiedad',
    metrics: [
      { label: 'Nivel de dolor', value: '0' },
      { label: 'Satisfacción', value: '100%' },
    ],
    badge: 'Paciente ansioso',
  },
]

export function CasesSection() {
  return (
    <section id="casos" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

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
            Casos de éxito
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Historias reales de{' '}
            <span className="text-primary">transformación</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Cada caso representa una sonrisa recuperada y una vida transformada
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white to-muted/30 rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                {/* Avatar + Nombre */}
                <div className="absolute right-2 top-2 flex flex-col items-center gap-3 bg-white/90  px-3 py-2 ">
                  <Avatar className="h-11 w-11">
                    <AvatarImage src={caseItem.patientImage} alt={caseItem.patientName} height={44} width={44} />
                    <AvatarFallback>{caseItem.patientName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <p className="text-sm font-semibold bg-secondary text-white px-2 rounded-full">
                      {caseItem.patientName}
                    </p>
              
                  </div>
                </div>

                {/* Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {caseItem.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Problem */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs text-primary font-bold">1</span>
                      </div>
                      Problema inicial
                    </div>
                    <p className="font-heading font-semibold text-foreground">
                      {caseItem.problem}
                    </p>
                  </div>

                  {/* Transformation */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Calendar className="w-3 h-3 text-secondary-dark" />
                      </div>
                      Tratamiento
                    </div>
                    <p className="text-foreground">
                      {caseItem.transformation}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Smile className="w-3 h-3 text-secondary-dark" />
                      </div>
                      Resultado
                    </div>
                    <p className="text-primary font-semibold">
                      {caseItem.result}
                    </p>
                  </div>

                </div>
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
          <p className="text-muted-foreground mb-4">
            Tu historia de éxito podría ser la siguiente
          </p>
         <CTAButton>Comienza tu transformación</CTAButton>
        </motion.div>
       
      </div>
    </section>
  )
}

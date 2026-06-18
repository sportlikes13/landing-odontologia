'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"

const faqs = [
  {
    question: '¿Cómo sé si necesito tratamiento periodontal?',
    answer: 'Las señales más comunes son: sangrado de encías al cepillarte o usar hilo dental, encías rojas, hinchadas o sensibles, mal aliento persistente, dientes flojos o que se ven más largos, y dolor al masticar. Si experimentas alguno de estos síntomas, es importante que un especialista evalúe tu caso.',
  },
  {
    question: '¿El tratamiento con láser duele?',
    answer: 'No. El tratamiento con láser periodontal es significativamente menos doloroso que los métodos tradicionales. La mayoría de nuestros pacientes reportan mínimas molestias durante y después del procedimiento. Además, ofrecemos opciones de sedación consciente para pacientes con ansiedad dental.',
  },
  {
    question: '¿Puedo evitar perder mis dientes?',
    answer: 'En la mayoría de los casos, sí. Cuando la periodontitis se detecta y trata a tiempo, es posible detener la progresión de la enfermedad y conservar tus dientes naturales. La tecnología láser nos permite tratar incluso casos avanzados con excelentes resultados.',
  },
  {
    question: '¿Cuánto dura la recuperación?',
    answer: 'La recuperación con tratamiento láser es mucho más rápida que con métodos tradicionales. La mayoría de los pacientes pueden retomar sus actividades normales al día siguiente. Las molestias menores suelen desaparecer en 2-3 días, y la sanación completa del tejido se logra en 2-4 semanas.',
  },
  {
    question: '¿Qué pasa si no me trato?',
    answer: 'La periodontitis no tratada sigue avanzando silenciosamente. La infección destruye progresivamente el hueso que sostiene tus dientes, causando que se aflojen y eventualmente se pierdan. Además, las bacterias periodontales se han relacionado con enfermedades cardíacas, diabetes y otras condiciones sistémicas.',
  },
  {
    question: '¿Cuánto cuesta el tratamiento?',
    answer: 'El costo varía según la gravedad del caso y el número de dientes afectados. En tu valoración inicial, realizamos un diagnóstico completo con tecnología 3D y te presentamos un plan de tratamiento con costos claros y opciones de financiación. La valoración periodontal tiene un costo especial.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Preguntas frecuentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Resolvemos tus{' '}
            <span className="text-primary">dudas</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-light rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-heading font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center"
                >
                  <ChevronDown className="w-5 h-5 text-secondary" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          
          <CTAButton>Agenda tu diagnóstico periodontal ahora</CTAButton>
        </motion.div>
      </div>
    </section>
  )
}

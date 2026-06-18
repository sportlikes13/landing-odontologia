'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check, Quote } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

const credentials = [
  'Odontóloga – Colegio Odontológico Colombiano',
  'Especialista en Periodoncia – Universidad Antonio Nariño',
  'Especialista en Gerencia en Salud – UNICOC',
  'Formación avanzada en Estética y Operatoria Dental',
  'Amplia experiencia en Implantología Oral',
]

export function AboutSection() {
  return (
    <section id="especialista" className="py-10 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-primary/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-secondary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              CONOCE A TU ESPECIALISTA
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Más de 19 años ayudando pacientes a recuperar la salud de su sonrisa
            </h2>
            <p className="mt-4 text-secondary-foreground text-base sm:text-lg leading-8">
              La Dra Juana Perez combina experiencia, tecnología moderna y un enfoque personalizado para ayudarte a conservar tus dientes y recuperar la confianza al sonreír.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:rounded-[2rem] border border-border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
          >
            <Image
              src="/doctora.jpg"
              alt="Dra. odontologa"
              width={600}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-3 grid gap-10"
          >
            <div className="mx-auto w-full max-w-3xl">
              <div className="rounded-[2rem] border border-border bg-muted/20 shadow-sm p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-foreground/10 text-primary-foreground">
                  <Quote className="w-6 h-6" />
                </div>
                <p className="text-lg lg:text-xl font-semibold text-foreground leading-8">
                  “Mi compromiso es ayudarte a conservar tus dientes y devolverte la confianza al sonreír.”
                </p>
                <p className="mt-6 text-sm text-muted-foreground">— Dra. Juana Perez</p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-4xl text-center">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Experiencia que inspira confianza
              </h3>
              <p className="text-muted-foreground leading-8 text-base sm:text-lg">
                Desde 2005, la Dra. Juana Perez ha acompañado a cientos de pacientes en la prevención, diagnóstico y tratamiento de enfermedades periodontales, ayudándolos a conservar sus dientes y recuperar la salud de su sonrisa.
                <span className="block mt-4">
                  Su práctica combina conocimiento especializado, tecnología de última generación y una atención cercana, brindando tratamientos personalizados que priorizan el bienestar, la comodidad y resultados duraderos.
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-4 grid gap-4 sm:grid-cols-2"
          >
            {credentials.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-3xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-foreground leading-7 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="order-5 text-center"
          >
            <CTAButton>Agenda tu valoración</CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

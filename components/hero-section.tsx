'use client'

import { motion } from 'framer-motion'
import { Check, Shield, Clock, Sparkles, User } from 'lucide-react'
import { CTAButton } from "@/components/ui/cta-button"
import { Testimonial } from "@/components/ui/testimonial-card"


const benefits = [
  'Recuperación más rápida',
  'Menos dolor e inflamación',
  'Atención ideal para pacientes con miedo al odontólogo',
  'Resultados visibles desde etapas tempranas',
]

const socialProof = [
  { icon: Shield, label: '+19 años', sublabel: 'de experiencia especializada' },
  { icon: Sparkles, label: '+1000 pacientes', sublabel: 'con sonrisas recuperadas' },
  { icon: Clock, label: 'Tecnología láser', sublabel: 'Recuperación más cómoda' },
  { icon: User, label: '+10 especialistas', sublabel: 'Al cuidado de tu sonrisa' },
]
const testimonials = [
  {
    name: "Elizabeth Mora",
    role: "",
    company: "",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial: "Desde la primera consulta me sentí tranquila y acompañada durante todo el tratamiento."
  },
  {
    name: "Giovanny Torres",
    role: "",
    company: "",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=john",
    testimonial: "Mis encías mejoraron muchísimo y la recuperación fue más rápida de lo esperado."
  },
  {
    name: "Angie Sanabria",
    role: "",
    company: "",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial: "Todo el proceso fue claro, cómodo y mucho menos doloroso de lo que imaginaba."
  }
]


export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden bg-[url('/dental-hero.jpg')] bg-cover bg-center md:bg-none">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero hidden md:block" />
      <div className="absolute inset-0 bg-white/80 md:bg-transparent pointer-events-none" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
           

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl  sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance text-center md:text-left">
                Recupera tus encías y conserva tus dientes{' '}
                <span className="text-primary">sin dolor</span> ni tratamientos traumáticos
              </h1>
              
              <p className="text-lg sm:text-xl text-accent-foreground leading-relaxed max-w-xl text-pretty">
                Con tecnología láser avanzada y atención especializada, puedes detener el avance de la periodontitis, reducir la inflamación y volver a sonreír con confianza desde las primeras citas.
              </p>
            </div>

            

          

            {/* CTAs - Desktop */}
           
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:sticky lg:top-28 hidden lg:block"
          >
            <img src="/dental-hero.jpg" alt="Imagen de atención periodontal láser" className="w-full rounded-2xl shadow-lg object-cover" />
          </motion.div>
        </div>

       
              <div id="testimonios" className="mt-8">
              
                {/* testimonials */}
                 <div className="container py-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
              {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10 text-center mt-12"
        >
          <CTAButton >
              Agenda tu Valoración periodontal ahora
          </CTAButton>
        </motion.div>
              </div>
      </div>
    </section>
  )
}

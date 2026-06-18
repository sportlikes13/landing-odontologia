'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, Clock, User, ShieldCheck } from 'lucide-react'

interface ContactFormProps {
  variant?: 'hero' | 'final'
}

export function ContactForm({ variant = 'hero' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    sintomas: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-primary/10 p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8 text-secondary-dark" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          ¡Gracias por contactarnos!
        </h3>
        <p className="text-muted-foreground">
          Nos comunicaremos contigo pronto para agendar tu valoración periodontal.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden">
      {/* Header */}
      <div className="gradient-primary px-6 py-5">
        <h3 className="font-heading text-xl font-bold text-white text-center">
          {variant === 'hero' 
            ? 'Agenda tu valoración gratuita'
            : 'Quiero recuperar mi sonrisa'
          }
        </h3>
        <p className="text-white/90 text-sm text-center mt-1">
          Un especialista te contactará en menos de 24 horas
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl border border-border bg-input/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            placeholder="+57 300 000 0000"
            className="w-full px-4 py-3 rounded-xl border border-border bg-input/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="sintomas" className="block text-sm font-medium text-foreground mb-2">
            Describe tus síntomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            value={formData.sintomas}
            onChange={handleChange}
            rows={3}
            placeholder="¿Qué molestias tienes? (sangrado, inflamación, dolor...)"
            className="w-full px-4 py-3 rounded-xl border border-border bg-input/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-primary text-white font-semibold text-lg hover:opacity-90 disabled:opacity-70 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:scale-[1.01]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Quiero mi valoración
            </>
          )}
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>Respuesta rápida</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="w-3.5 h-3.5" />
            <span>Atención personalizada</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sin compromiso</span>
          </div>
        </div>
      </form>
    </div>
  )
}

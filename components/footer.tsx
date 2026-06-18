'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-heading font-semibold text-white text-lg">
                Periodoncia Láser
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-4">
              Especialistas en periodoncia con tecnología láser avanzada. +20 años cuidando la salud de tus encías en Bogotá.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#especialista" className="text-white/70 hover:text-primary transition-colors">
                  Especialista
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/70 hover:text-primary transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#casos" className="text-white/70 hover:text-primary transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Calle 123 #45-67, Consultorio 301<br />
                  Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+573001234567" className="text-white/70 hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@periodoncialaserá.com" className="text-white/70 hover:text-primary transition-colors">
                  info@periodoncia.com
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Horario de atención
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/70">
                  <p>Lunes a Viernes</p>
                  <p className="text-white">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/70">
                  <p>Sábados</p>
                  <p className="text-white">8:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Periodoncia Láser Bogotá. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

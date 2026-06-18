'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'

export function StickyCTAMobile() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-border shadow-2xl shadow-foreground/10 px-4 py-3 safe-area-inset-bottom">
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl gradient-primary text-white font-semibold text-lg shadow-lg shadow-primary/25"
            >
              <Calendar className="w-5 h-5" />
              Agenda tu valoración
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

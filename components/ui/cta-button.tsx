import { Button } from "@/components/ui/button"

type CTAButtonProps = {
  children: React.ReactNode
  className?: string
}

export function CTAButton({ children, className }: CTAButtonProps) {
  return (
    <Button asChild variant="cta" size="lg"  className={className}>
      <a
        href="https://wa.me/573204848680?text=Hola,%20estoy%20interesado%20en%20agendar%20una%20cita"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  )
}
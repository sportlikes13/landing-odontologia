import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SocialProofSection } from '@/components/social-proof-section'
import { PainPointsSection } from '@/components/pain-points-section'
import { BenefitsSection } from '@/components/benefits-section'
import { AboutSection } from '@/components/about'
import { DifferentiatorsSection } from '@/components/differentiators-section'
import { CasesSection } from '@/components/cases-section'
import { FAQSection } from '@/components/faq-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { ClosingSection } from '@/components/closing-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <PainPointsSection />
      <AboutSection />
      <BenefitsSection />
      <DifferentiatorsSection />
      <CasesSection />
      <FAQSection />
      <FinalCTASection />
      <ClosingSection />
      <Footer />
    </main>
  )
}

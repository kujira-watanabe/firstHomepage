import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CurriculumSection } from "@/components/landing/curriculum-section"
import { InstructorSection } from "@/components/landing/instructor-section"
import { BestEffortSection } from "@/components/landing/best-effort-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CurriculumSection />
        <InstructorSection />
        <BestEffortSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

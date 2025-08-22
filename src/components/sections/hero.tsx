import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from 'next/dynamic'

const ParticleHero = dynamic(() => import('./ParticleHero.client'), { ssr: false })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary overflow-hidden"
    >
      <ParticleHero />
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
            SnowBase Studio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We build intelligent systems that amplify human potential, turning
            your complex challenges into impactful, data-driven outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

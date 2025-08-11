import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-background to-secondary"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            AI-Powered, Human-Driven Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We build intelligent systems that amplify human potential, turning
            your complex challenges into impactful, data-driven outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#portfolio">Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

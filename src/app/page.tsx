import Header from "@/components/layout/header";
import ParticleHero from "@/components/sections/ParticleHero.client";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ParticleHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Services />
          <Team />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

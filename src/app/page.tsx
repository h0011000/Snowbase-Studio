import Header from "@/components/layout/header";
import ParticleHero from "@/components/sections/ParticleHero.client";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import SkipToContent from "@/components/ui/skip-to-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SnowBase Studio | AI Development",
    template: "%s | SnowBase Studio"
  },
  description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
  keywords: "AI development, machine learning, data analytics, AI consulting, SnowBase Studio",
  authors: [{ name: "SnowBase Studio" }],
  creator: "SnowBase Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snowbasestudio.com",
    title: "SnowBase Studio | AI Development",
    description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
    siteName: "SnowBase Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowBase Studio | AI Development",
    description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
    creator: "@snowbasestudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none">
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

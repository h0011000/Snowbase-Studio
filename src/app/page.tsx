import Header from "@/components/layout/header";
import ParticleHero from "@/components/sections/ParticleHero.client";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import SkipToContent from "@/components/ui/skip-to-content";
import Script from "next/script";
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
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SnowBase Studio",
            "url": "https://snowbasestudio.com",
            "logo": "https://snowbasestudio.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/snowbasestudio",
              "https://github.com/snowbasestudio"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "hi@snowbasestudio.com",
              "contactType": "customer service"
            }
          })
        }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          <ParticleHero />
          {/* Decorative elements */}
          <div className="fixed top-1/4 left-8 w-3 h-3 rounded-full bg-primary/20 animate-pulse-slow hidden lg:block"></div>
          <div className="fixed bottom-1/3 right-8 w-4 h-4 rounded-full bg-accent/20 animate-pulse-slow animation-delay-1000 hidden lg:block"></div>
          <div className="fixed top-1/2 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse-slow animation-delay-2000 hidden lg:block"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
            <Team />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

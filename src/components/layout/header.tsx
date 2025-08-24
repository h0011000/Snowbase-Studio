"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ className, onItemClick }: { className?: string; onItemClick?: () => void }) => (
    <nav className={className} role="navigation" aria-label="Main navigation">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onItemClick}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 block"
              aria-current={typeof window !== 'undefined' && window.location.hash === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="#home" 
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
          aria-label="SnowBase Studio home"
        >
          <span className="text-lg font-semibold text-foreground">
            SnowBase Studio
          </span>
        </Link>
        <NavLinks className="hidden md:flex" />
        <div className="flex items-center gap-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-8">
                <Link 
                  href="#home" 
                  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="SnowBase Studio home"
                >
                  <span className="text-lg font-semibold text-foreground">
                    SnowBase Studio
                  </span>
                </Link>
                <NavLinks className="flex flex-col" onItemClick={() => setMobileMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
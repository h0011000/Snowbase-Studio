import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="#home" className="text-2xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                SnowBase<span className="text-foreground">Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Creating innovative AI solutions for the modern web.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                <a 
                  href="https://github.com/as000010000/Hi-man" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                <a 
                  href="mailto:hi@snowbasestudio.com" 
                  aria-label="Send us an email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI Consulting</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Machine Learning</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Data Analytics</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Custom Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">Expertise</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">hi@snowbasestudio.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">123 Innovation Drive</li>
              <li className="text-muted-foreground">Tech City, TC 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SnowBase Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
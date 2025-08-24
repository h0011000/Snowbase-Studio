import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95" role="contentinfo">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <Link href="#home" className="text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1">
          SnowBase Studio
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SnowBase Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our GitHub profile"
              className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
              className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiSqlite,
} from "@icons-pack/react-simple-icons";
import React from "react";

const technologies = [
  { name: "Python", icon: <SiPython size={24} aria-hidden="true" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={24} aria-hidden="true" /> },
  { name: "PyTorch", icon: <SiPytorch size={24} aria-hidden="true" /> },
  { name: "Pandas", icon: <SiPandas size={24} aria-hidden="true" /> },
  { name: "AWS", icon: <SiAmazon size={24} aria-hidden="true" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={24} aria-hidden="true" /> },
  { name: "Docker", icon: <SiDocker size={24} aria-hidden="true" /> },
  { name: "SQL", icon: <SiSqlite size={24} aria-hidden="true" /> },
  { name: "Kubernetes", icon: <SiPython size={24} aria-hidden="true" /> },
  { name: "React", icon: <SiPython size={24} aria-hidden="true" /> },
  { name: "Node.js", icon: <SiPython size={24} aria-hidden="true" /> },
  { name: "MongoDB", icon: <SiPython size={24} aria-hidden="true" /> },
];

export default function Team() {
  return (
    <section id="team" className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-background">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Expertise & Technology Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team comprises seasoned experts with decades of combined experience in AI and software engineering. We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
        </div>
        <div className="mt-16">
          <div 
            className="flex flex-wrap justify-center gap-6" 
            role="list"
            aria-label="Technologies we work with"
          >
            {technologies.map((tech, index) => (
              <Badge 
                key={tech.name} 
                variant="default" 
                className="flex items-center gap-3 text-base px-6 py-3 bg-card/50 border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                role="listitem"
                style={{ 
                  animation: `fade-in-up 0.5s ease-out forwards`,
                  animationDelay: `${index * 50}ms`,
                  opacity: 0
                }}
              >
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Additional visual element */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 animate-pulse-slow"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 animate-pulse-slow animation-delay-1000"></div>
            <div className="text-center z-10">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-lg text-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
  { name: "Python", icon: <SiPython size={18} aria-hidden="true" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={18} aria-hidden="true" /> },
  { name: "PyTorch", icon: <SiPytorch size={18} aria-hidden="true" /> },
  { name: "Pandas", icon: <SiPandas size={18} aria-hidden="true" /> },
  { name: "AWS", icon: <SiAmazon size={18} aria-hidden="true" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={18} aria-hidden="true" /> },
  { name: "Docker", icon: <SiDocker size={18} aria-hidden="true" /> },
  { name: "SQL", icon: <SiSqlite size={18} aria-hidden="true" /> },
];

export default function Team() {
  return (
    <section id="team" className="w-full py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Expertise & Technology Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team comprises seasoned experts with decades of combined experience in AI and software engineering. We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
          <div 
            className="mt-8 flex flex-wrap justify-center gap-4" 
            role="list"
            aria-label="Technologies we work with"
          >
            {technologies.map((tech) => (
              <Badge 
                key={tech.name} 
                variant="default" 
                className="flex items-center gap-2 text-sm px-3 py-1.5"
                role="listitem"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
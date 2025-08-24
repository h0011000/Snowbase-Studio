<<<<<<< HEAD
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
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/team/john-doe.jpg",
    description: "Visionary leader with 10+ years of experience in web development and digital strategy."
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    image: "/team/jane-smith.jpg",
    description: "Creative mind behind our stunning UI/UX designs with a passion for user-centered design."
  },
  {
    name: "Mike Johnson",
    role: "Senior Developer",
    image: "/team/mike-johnson.jpg",
    description: "Full-stack developer specializing in modern web technologies and performance optimization."
  }
>>>>>>> 65ee0cffb2cfba3697db3840d5dcc40ba71e9a6a
];

export default function Team() {
  return (
<<<<<<< HEAD
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
=======
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <div className="h-48 bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground">Photo</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
>>>>>>> 65ee0cffb2cfba3697db3840d5dcc40ba71e9a6a
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 65ee0cffb2cfba3697db3840d5dcc40ba71e9a6a

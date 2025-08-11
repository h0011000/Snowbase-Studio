import { Badge } from "@/components/ui/badge";

const technologies = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "AWS",
  "Google Cloud",
  "Azure",
  "Docker",
  "Kubernetes",
  "SQL",
  "NoSQL",
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
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

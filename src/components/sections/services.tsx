import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrainCircuit, Users, Code, LineChart, Zap, Cpu, Database, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Machine Learning Solutions",
    description:
      "We develop and deploy predictive models that uncover insights, automate processes, and drive business growth with unparalleled accuracy.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "AI Consulting",
    description:
      "Our experts help you navigate the AI landscape, crafting a strategic roadmap to integrate artificial intelligence into your core business strategy.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Custom AI Development",
    description:
      "From natural language processing to computer vision, we build bespoke AI applications tailored to your unique operational needs and challenges.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable intelligence. We provide advanced analytics services that reveal trends and inform strategic decisions.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "AI Automation",
    description:
      "Streamline your workflows with intelligent automation solutions that reduce manual effort and increase operational efficiency.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Neural Networks",
    description:
      "Design and implement cutting-edge neural network architectures for complex problem-solving across various domains.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Big Data Processing",
    description:
      "Handle massive datasets with our scalable solutions that extract value from your organization's data assets.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" aria-hidden="true" />,
    title: "Predictive Analytics",
    description:
      "Anticipate future trends and behaviors with our advanced predictive modeling capabilities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-28 bg-gradient-to-br from-background to-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Core Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive suite of AI services to transform your business and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="flex flex-col items-center text-center p-6 border border-border/50 transition-all duration-500 hover:border-primary hover:bg-background/50 hover:shadow-xl rounded-xl bg-card/30 backdrop-blur-sm group hover:-translate-y-2"
              style={{ 
                animation: `fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <CardHeader className="items-center p-0">
                <div className="rounded-full bg-primary/10 p-4 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-balance text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

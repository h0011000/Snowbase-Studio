import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrainCircuit, Users, Code, LineChart } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Machine Learning Solutions",
    description:
      "We develop and deploy predictive models that uncover insights, automate processes, and drive business growth with unparalleled accuracy.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "AI Consulting",
    description:
      "Our experts help you navigate the AI landscape, crafting a strategic roadmap to integrate artificial intelligence into your core business strategy.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom AI Development",
    description:
      "From natural language processing to computer vision, we build bespoke AI applications tailored to your unique operational needs and challenges.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable intelligence. We provide advanced analytics services that reveal trends and inform strategic decisions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a comprehensive suite of AI services to transform your
            business.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

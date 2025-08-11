import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    name: "Predictive Health Analytics",
    industry: "Healthcare",
    description:
      "Developed an AI model to predict patient readmission rates, helping hospitals optimize resource allocation and improve patient care.",
    outcome: "Reduced readmissions by 18% within six months.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "medical data",
  },
  {
    name: "AI-Powered Fraud Detection",
    industry: "Finance",
    description:
      "Implemented a real-time fraud detection system for a major financial institution, capable of analyzing thousands of transactions per second.",
    outcome: "Increased fraud detection accuracy by 40% and saved $2M in the first quarter.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "financial chart",
  },
  {
    name: "Personalized Retail Engine",
    industry: "Retail",
    description:
      "Built a recommendation engine for an e-commerce platform that personalizes the shopping experience for millions of users.",
    outcome: "Boosted customer engagement by 35% and increased average order value by 22%.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "online shopping",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore some of our successful AI projects across various
            industries.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.name} className="overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  data-ai-hint={item.aiHint}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                />
                <div className="pt-4 flex justify-between items-center">
                  <CardTitle>{item.name}</CardTitle>
                  <Badge variant="secondary">{item.industry}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Outcome: <span className="font-normal text-muted-foreground">{item.outcome}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

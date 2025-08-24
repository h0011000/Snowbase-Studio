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
];

export default function Team() {
  return (
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
        </div>
      </div>
    </section>
  );
}

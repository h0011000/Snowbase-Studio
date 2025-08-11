import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About SnowBase Studio
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg font-semibold text-primary">
                Our mission is to democratize artificial intelligence, making its power accessible and beneficial for businesses of all sizes.
              </p>
              <p>
                Founded by a team of passionate AI researchers and engineers, SnowBase Studio was built on the principle that technology should serve humanity. We believe in a collaborative approach, working closely with our clients to understand their vision and co-create solutions that deliver real-world value.
              </p>
              <p>
                What sets us apart is our commitment to ethical AI and our focus on building long-term partnerships. We don't just deliver code; we deliver sustainable, scalable AI strategies that grow with your business.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="SnowBase Studio Team"
              data-ai-hint="team collaboration"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

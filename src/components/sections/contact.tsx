"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll be in touch soon.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message,
      });
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-gradient-to-br from-background to-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Contact Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's talk about how we can help you transform your ideas into reality.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to start your next AI project? Reach out to us and let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a 
                    href="mailto:hi@snowbasestudio.com" 
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors"
                  >
                    hi@snowbasestudio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Office</h4>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech City, TC 10001
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold mb-2">Start Your Project</h4>
                  <p className="text-muted-foreground">
                    Let's build something amazing together
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-xl">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input 
                            id="name"
                            placeholder="Your Name" 
                            {...field} 
                            aria-describedby="name-error"
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage id="name-error" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input 
                            id="email"
                            type="email"
                            placeholder="your.email@example.com" 
                            {...field} 
                            aria-describedby="email-error"
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage id="email-error" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="projectType">Project Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        aria-describedby="projectType-error"
                      >
                        <FormControl>
                          <SelectTrigger 
                            id="projectType"
                            className="bg-background/50 border-border/50 focus:border-primary"
                          >
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ai-consulting">AI Strategy & Consulting</SelectItem>
                          <SelectItem value="custom-development">Custom AI Model Development</SelectItem>
                          <SelectItem value="data-analytics">Advanced Data Analytics</SelectItem>
                          <SelectItem value="nlp-solutions">Natural Language Processing (NLP)</SelectItem>
                          <SelectItem value="computer-vision">Computer Vision</SelectItem>
                          <SelectItem value="automation">AI-Powered Automation</SelectItem>
                          <SelectItem value="integration">AI Integration Services</SelectItem>
                          <SelectItem value="enterprise-ai">Enterprise AI Solutions</SelectItem>
                          <SelectItem value="gen-ai-apps">Generative AI Applications</SelectItem>
                          <SelectItem value="ai-chatbots">AI-Powered Chatbots</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage id="projectType-error" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Tell us a little bit about your project"
                          className="resize-none min-h-[150px] bg-background/50 border-border/50 focus:border-primary"
                          {...field}
                          aria-describedby="message-error"
                        />
                      </FormControl>
                      <FormMessage id="message-error" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" 
                  disabled={form.formState.isSubmitting}
                  aria-live="polite"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <span className="sr-only">Sending message</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
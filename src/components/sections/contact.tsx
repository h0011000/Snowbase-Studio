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
import { Mail } from "lucide-react";
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
    <section id="contact" className="w-full py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Let's talk about how we can help you.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:hi@snowbasestudio.com" 
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  >
                    hi@snowbasestudio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6"
              aria-label="Contact form"
            >
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
                      />
                    </FormControl>
                    <FormMessage id="email-error" />
                  </FormItem>
                )}
              />
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
                        <SelectTrigger id="projectType">
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
                        className="resize-none"
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
                className="w-full" 
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
    </section>
  );
}
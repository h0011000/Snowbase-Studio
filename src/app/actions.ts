"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }
  
  // Here you would typically handle the form submission, e.g., send an email, save to a database.
  // For this example, we'll just log the data.
  console.log("Form submission received:");
  console.log(validatedFields.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Form submitted successfully!",
  };
}

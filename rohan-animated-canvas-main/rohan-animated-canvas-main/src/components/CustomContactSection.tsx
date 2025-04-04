
import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
}

const CustomContactSection: React.FC<ContactSectionProps> = ({
  email = "your.email@example.com", // Replace with your email
  phone = "+1 (234) 567-8901", // Replace with your phone number
  location = "San Francisco, CA"
}) => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a question or want to work together? Feel free to contact me.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-foreground/70">{email}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-foreground/70">{phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-foreground/70">{location}</p>
              </div>
            </div>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Send me a message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <input
                        id="first-name"
                        placeholder="John"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        placeholder="Doe"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can I help you?"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <Separator />
                <div className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomContactSection;

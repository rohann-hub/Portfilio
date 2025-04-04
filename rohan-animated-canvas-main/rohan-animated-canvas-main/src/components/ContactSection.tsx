
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-gradient">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-foreground/70">rohan@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-foreground/70">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-foreground/70">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {["github", "twitter", "linkedin", "instagram"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {/* Simple placeholder for social icons */}
                    <span className="text-sm">{platform[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full bg-muted/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-muted/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-muted/50 min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-primary hover:bg-primary/80"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

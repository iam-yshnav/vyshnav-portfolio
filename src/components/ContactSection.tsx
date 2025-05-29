
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = 'service_uc94usp';
    const templateId = 'template_raj7ssd';
    const publicKey = 'nU1ilynGTfHV2sARU';
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast({
          title: "Error sending message",
          description: "Please try again or contact me directly via email.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <section id="contact" className="py-20 bg-accent/20">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <Card className="cyber-card h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="cyber-card p-3 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">vyshnav.vnod@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6 mt-6">
                    <p className="text-sm text-muted-foreground mb-4">Connect with me on</p>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/iam-yshnav" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyber-card p-3 hover:scale-110 transition-transform"
                      >
                        <Github className="h-5 w-5 text-primary" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/yshnav/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyber-card p-3 hover:scale-110 transition-transform"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                      </a>
                      <a 
                        href="https://twitter.com/iam_yshnav" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyber-card p-3 hover:scale-110 transition-transform"
                      >
                        <Twitter className="h-5 w-5 text-primary" />
                      </a>
                      <a 
                        href="https://www.instagram.com/iam_yshnav_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyber-card p-3 hover:scale-110 transition-transform"
                      >
                        <Instagram className="h-5 w-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="cyber-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="cyber-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="cyber-border"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-cyber w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

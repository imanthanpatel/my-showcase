import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5f607707-1607-4446-b775-94a5c9109e96",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: "New Contact Message from Manthan Patel Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-secondary/30"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get In <span className="text-gradient">Touch</span>
            </h2>

            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in cybersecurity, security operations, IT
              infrastructure, networking, or software development?
              Feel free to get in touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Let's connect
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  I'm interested in opportunities related to cybersecurity,
                  SOC operations, IT infrastructure, networking, and software
                  development. Whether you have an opportunity, project,
                  collaboration idea, or question, feel free to reach out.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:manthan002408@example.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                aria-label="Send email to Manthan Patel"
              >
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail
                    className="w-5 h-5 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>

                  <p className="font-medium text-foreground">
                    manthan002408@example.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>

                  <p className="font-medium text-foreground">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">

                <a
                  href="https://github.com/imanthanpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="Manthan Patel on GitHub"
                >
                  <Github size={18} aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/manthanpatel24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="Manthan Patel on LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>

              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact form"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your opportunity, project, or question..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <Send size={18} aria-hidden="true" />
                Send Message
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
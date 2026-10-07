import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Greeting */}
          <p
            className="text-primary font-medium mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Manthan Patel</span>
          </h1>

          {/* Professional Identity */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Cybersecurity Student & Security Analyst
          </h2>

          {/* Introduction */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Computer Science student and Security Analyst focused on
            cybersecurity, SOC operations, SIEM, network security, ethical
            hacking, and security research.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>

            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/imanthanpatel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manthan Patel on GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/manthanpatel24/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manthan Patel on LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:manthan002408@example.com"
              aria-label="Email Manthan Patel"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
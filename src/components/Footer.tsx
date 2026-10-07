import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t border-border"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with
            <Heart
              size={14}
              className="text-primary"
              aria-hidden="true"
            />
            by Manthan Patel © {currentYear}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/imanthanpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Manthan Patel on GitHub"
            >
              <Github size={18} aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manthanpatel24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Manthan Patel on LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
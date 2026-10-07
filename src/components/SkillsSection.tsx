import {
  Code2,
  Database,
  Wrench,
  Server,
  Layers,
  Terminal,
  Shield,
  Network,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "SIEM",
      "SOC Operations",
      "Network Security",
      "Ethical Hacking",
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "SearchSploit",
    ],
  },
  {
    title: "Security & Analysis",
    icon: Network,
    skills: [
      "Kali Linux",
      "Linux",
      "YARA",
      "Sigma",
      "MITRE ATT&CK",
      "Security Monitoring",
      "Log Analysis",
      "Threat Detection",
    ],
  },
  {
    title: "Networking & Infrastructure",
    icon: Server,
    skills: [
      "TCP/IP",
      "OSI Model",
      "DNS",
      "HTTP/HTTPS",
      "LAN",
      "Nginx",
      "Apache",
      "SSL/TLS",
      "Moodle",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
    ],
  },
  {
    title: "Web Development",
    icon: Layers,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Spring Boot",
      "Spring Security",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Linux Server Administration",
    ],
  },
  {
    title: "Security & Development Tools",
    icon: Terminal,
    skills: [
      "Git",
      "GitHub",
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Postman",
      "VS Code",
      "Figma",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative bg-secondary/30"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="skills-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Technical <span className="text-gradient">Skills</span>
            </h2>

            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cybersecurity, networking, infrastructure, programming, and
              software development technologies I work with.
            </p>
          </div>

          {/* Skill Category Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group relative gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:glow-subtle"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                      <Icon
                        className="w-6 h-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-secondary/80 border border-border text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
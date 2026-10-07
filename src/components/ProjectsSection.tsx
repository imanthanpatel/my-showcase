import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Task Management API",
    description:
      "A RESTful Task Management API built with Java and Spring Boot for creating, managing, and tracking tasks. The project demonstrates backend API development, database integration, and structured application design.",
    tech: ["Java", "Spring Boot", "Supabase", "REST API"],
    github: "https://github.com/imanthanpatel/Task-Tracker-API",
    live: null,
    featured: true,
  },

  {
    title: "Airport Navigation System",
    description:
      "An interactive airport navigation interface built with React that allows users to explore terminals and gates through dynamic selection. The responsive interface focuses on usability and intuitive navigation.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/imanthanpatel/airport-ui",
    live: "https://airport-ui.vercel.app/",
    featured: true,
  },

  {
    title: "SentinelSIEM",
    description:
      "A lightweight Security Information and Event Management platform designed to collect, analyze, and monitor security events. The project includes log ingestion, rule-based detection, alert management, role-based access, and MITRE ATT&CK mapping.",
    tech: [
      "Django",
      "Django REST Framework",
      "React",
      "MySQL",
      "SIEM",
      "MITRE ATT&CK",
    ],
    github: "#",
    live: null,
    featured: true,
  },

  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing cybersecurity, IT infrastructure, software development experience, technical skills, and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/imanthanpatel",
    live: "https://www.manthanpatel.me/",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Selected projects demonstrating my experience in cybersecurity,
              software development, security monitoring, and modern web
              technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group gradient-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:glow-subtle"
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder
                    className="w-10 h-10 text-primary"
                    aria-hidden="true"
                  />

                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={20} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
                Other Noteworthy Projects
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project) => (
                  <article
                    key={project.title}
                    className="p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>

                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/imanthanpatel"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More on GitHub
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
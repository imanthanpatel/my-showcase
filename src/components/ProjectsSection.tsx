import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
  //   tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  //   github: "#",
  //   live: "#",
  //   featured: true,
  // },
  {
    title: "Task Management App",
    description: "Built a Task Tracker API enabling task creation and progress tracking.",
    tech: ["Java", "Spring Boot", "Supabse"],
    github: "https://github.com/imanthanpatel/Task-Tracker-API",
    live: "#",
    featured: true,
  },
  // {
  //   title: "AI Content Generator",
  //   description: "An AI-powered application that generates marketing copy and blog content.",
  //   tech: ["Python", "FastAPI", "OpenAI", "React"],
  //   github: "#",
  //   live: "#",
  //   featured: true,
  // },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "https://www.manthanpatel.me/",
    featured: false,
  },
  // {
  //   title: "Weather Dashboard",
  //   description: "Real-time weather tracking with beautiful visualizations.",
  //   tech: ["Vue.js", "D3.js", "Weather API"],
  //   github: "#",
  //   live: "#",
  //   featured: false,
  // },
  // {
  //   title: "Chat Application",
  //   description: "Real-time messaging app with group chats and file sharing.",
  //   tech: ["React", "Socket.io", "MongoDB"],
  //   github: "#",
  //   live: "#",
  //   featured: false,
  // },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and passion
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group gradient-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:glow-subtle"
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
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
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <div
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
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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

import { Code2, Database, Wrench, Server, Layers, Terminal, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring Security", "REST APIs", "Node.js"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    skills: ["Docker", "AWS", "CI/CD"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to craft modern, scalable applications
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
                      <Icon className="w-6 h-6 text-primary-foreground" />
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

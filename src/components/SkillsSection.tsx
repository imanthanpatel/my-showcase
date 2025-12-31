const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Java", level: 75, category: "Languages" },
  // { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "PostgreSQL", level: 65, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 10, category: "DevOps" },
];

const technologies = [
  "JavaScript", "HTML5", "CSS3", "Next.js", 
  "REST APIs", "MongoDB",  "AWS", "Figma", "Spring Boot"
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
              A collection of technologies and tools I've mastered over the years
            </p>
          </div>

          {/* Skills Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-hero rounded-full transition-all duration-1000 ease-out group-hover:glow-subtle"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

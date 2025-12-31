import { Code, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code is my passion",
  },
  {
    icon: Palette,
    title: "Design Eye",
    description: "Creating beautiful interfaces that users love",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast, optimized applications",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-hero mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar Area */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl gradient-card border border-border overflow-hidden glow-subtle">
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full gradient-hero mx-auto mb-6 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">YN</span>
                    </div>
                    <p className="text-muted-foreground">Your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Turning ideas into digital reality
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate developer with a love for creating elegant solutions 
                to complex problems. With expertise in modern web technologies, I build 
                applications that are not only functional but also delightful to use.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying a good cup of coffee while 
                sketching out new project ideas.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Shield, Network, Search } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Security Operations",
    description: "Learning and applying SOC monitoring, alert analysis, and threat detection",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Building strong fundamentals in networking and security protocols",
  },
  {
    icon: Search,
    title: "Security Research",
    description: "Exploring SIEM, threat detection, ethical hacking, and security research",
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

            {/* Image / Avatar Area */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl gradient-card border border-border overflow-hidden glow-subtle">
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <div className="text-center p-8">

                    {/* Profile Image */}
                    <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mb-6 ring-5 ring-primary/20 shadow-xl bg-muted">
                      <img
                        src="/manthan.jpeg"
                        alt="Manthan Patel - Cybersecurity Student and Security Analyst"
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: "center top",
                        }}
                      />
                    </div>

                    <p className="text-muted-foreground">
                      Manthan Patel
                    </p>

                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Building a career in cybersecurity
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I’m a Computer Science student and cybersecurity-focused
                Security Analyst interested in Security Operations, SIEM,
                network security, ethical hacking, and security research.
                I enjoy understanding how security systems detect threats
                and how security teams investigate and respond to incidents.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I’m continuously developing my technical skills through
                hands-on projects, security labs, networking fundamentals,
                and practical exploration of cybersecurity tools and
                technologies.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />

                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
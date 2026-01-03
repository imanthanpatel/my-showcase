import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Company",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Led development of scalable web applications and mentored junior developers.",
    image: "/placeholder.svg",
    highlights: [
      "Built microservices architecture serving 1M+ users",
      "Reduced deployment time by 60% through CI/CD improvements",
      "Mentored team of 5 junior developers"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    location: "New York, NY",
    duration: "2020 - 2022",
    description: "Developed and maintained full-stack applications using React and Node.js.",
    image: "/placeholder.svg",
    highlights: [
      "Developed customer-facing dashboard with React",
      "Implemented RESTful APIs with Node.js",
      "Improved application performance by 40%"
    ]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    location: "Los Angeles, CA",
    duration: "2018 - 2020",
    description: "Started career building responsive websites and web applications.",
    image: "/placeholder.svg",
    highlights: [
      "Created responsive landing pages",
      "Collaborated on e-commerce projects",
      "Learned agile development practices"
    ]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 gradient-hero mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey and the companies I've worked with
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-subtle hidden md:block" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="group gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:glow-subtle">
                    {/* Experience Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={`${exp.company} workplace`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

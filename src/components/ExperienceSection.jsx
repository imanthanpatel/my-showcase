import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "GUIITAR Council",
    location: "Vadodara, Gujarat",
    duration: "2-Jun to 2-July(2024)",
    description: "Interned at GUIITAR Council, developing responsive and maintainable frontend components using Next.js, TypeScript, and Tailwind CSS, while collaborating with stakeholders to enhance performance and user experience.",
    image: "/GUIITAR.jpg",
    highlights: [
      "Developed a clean, user-friendly frontend for the GUIITAR Council website",
      "Maintained smooth navigation and consistent UI across pages"      
    ]
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Startup Inc",
  //   location: "New York, NY",
  //   duration: "2020 - 2022",
  //   description: "Developed and maintained full-stack applications using React and Node.js.",
  //   image: "/placeholder.svg",
  //   highlights: [
  //     "Created React dashboard",
  //     "Implemented RESTful APIs",
  //     "Improved performance by 40%"
  //   ]
  // },
  // {
  //   title: "Junior Developer",
  //   company: "Digital Agency",
  //   location: "Los Angeles, CA",
  //   duration: "2018 - 2020",
  //   description: "Started career building responsive websites and web applications.",
  //   image: "/placeholder.svg",
  //   highlights: [
  //     "Built landing pages",
  //     "E-commerce projects",
  //     "Agile development"
  //   ]
  // },
  // {
  //   title: "Intern",
  //   company: "Software House",
  //   location: "Remote",
  //   duration: "2017 - 2018",
  //   description: "Assisted senior developers in debugging and testing core modules.",
  //   image: "/placeholder.svg",
  //   highlights: [
  //     "Wrote unit tests",
  //     "Fixed UI bugs",
  //     "Daily standups"
  //   ]
  // }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Constrain width to max-w-4xl to make cards narrower */}
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-16 h-1 gradient-hero mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              My professional journey and the companies I've worked with
            </p>
          </div>

          {/* Compact Grid Layout (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <a
                key={index}
                href={exp.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group gradient-card flex flex-col rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow-subtle cursor-pointer hover:-translate-y-1 hover:shadow-md"
              >
                {/* Compact Image Height (h-32) */}
                <div className="relative h-32 overflow-hidden shrink-0">
                  <img
                    src={exp.image}
                    alt={`${exp.company} workplace`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                    <span className="flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-1 text-xs rounded-full font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Tiny Duration Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-border/50 shadow-sm">
                    <Calendar className="w-2.5 h-2.5 text-primary" />
                    <span className="text-[10px] font-bold text-foreground uppercase tracking-wide">{exp.duration}</span>
                  </div>
                </div>

                {/* Compact Content Padding (p-4) */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      {/* Smaller Title */}
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1 text-primary/90 mt-0.5">
                        <Briefcase className="w-3 h-3" />
                        <span className="font-medium text-xs">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px]">{exp.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-3 text-xs leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>

                  <div className="mt-auto">
                    <ul className="space-y-1">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
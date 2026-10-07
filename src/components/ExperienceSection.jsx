import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    title: "LMS Infrastructure & Deployment",
    company: "GSFC University",
    location: "Vadodara, Gujarat",
    duration: "2026 - Present",
    description:
      "Contributing to the deployment and infrastructure management of LearningPlex, a Moodle-based university Learning Management System. Working with Linux servers, Nginx, Apache, MariaDB, SSL/TLS, and backend server configurations to maintain a reliable and scalable LMS environment.",
    image: "/placeholder.svg",
    highlights: [
      "Deployed and maintained the LearningPlex Moodle-based university LMS.",
      "Configured Nginx reverse proxy and Apache backend servers for web traffic distribution.",
      "Worked with MariaDB database configuration and Moodle server infrastructure.",
      "Configured HTTPS and SSL/TLS for secure LMS access.",
      "Worked on server performance, networking, and infrastructure troubleshooting.",
    ],
  },

  {
    title: "Frontend Developer",
    company: "GUIITAR Council",
    location: "Vadodara, Gujarat",
    duration: "2-Jun to 2-July (2024)",
    description:
      "Interned at GUIITAR Council, developing responsive and maintainable frontend components using Next.js, TypeScript, and Tailwind CSS while collaborating with stakeholders to improve performance and user experience.",
    image: "/GUIITAR.jpg",
    highlights: [
      "Developed a clean, user-friendly frontend for the GUIITAR Council website.",
      "Maintained smooth navigation and consistent UI across pages.",
      "Worked with Next.js, TypeScript, and Tailwind CSS.",
    ],
  },

  {
    title: "IT Associate",
    company: "GSFC University",
    location: "Vadodara, Gujarat",
    duration: "2026 - Present",
    description:
      "Working as an IT Associate, contributing to computer hardware maintenance, networking, system configuration, and technical troubleshooting. Gaining practical experience in system diagnostics, LAN setup, network connectivity, and IT infrastructure support.",
    image: "/placeholder.svg",
    highlights: [
      "Identified and resolved hardware and system-related issues.",
      "Assisted with LAN setup and network connectivity troubleshooting.",
      "Supported installation, configuration, and deployment of IT systems.",
      "Developed practical skills in real-world IT infrastructure and technical support.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-secondary/30"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2
              id="experience-heading"
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Work <span className="text-gradient">Experience</span>
            </h2>

            <div className="w-16 h-1 gradient-hero mx-auto rounded-full mb-4" />

            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              My professional experience across cybersecurity, IT
              infrastructure, networking, and software development.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <a
                key={index}
                href={exp.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${exp.company} experience`}
                className="group gradient-card flex flex-col rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow-subtle cursor-pointer hover:-translate-y-1 hover:shadow-md"
              >

                {/* Experience Image */}
                <div className="relative h-32 overflow-hidden shrink-0">
                  <img
                    src={exp.image}
                    alt={`${exp.company} - ${exp.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                    <span className="flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-1 text-xs rounded-full font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-border/50 shadow-sm">
                    <Calendar className="w-2.5 h-2.5 text-primary" />

                    <span className="text-[10px] font-bold text-foreground uppercase tracking-wide">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Experience Content */}
                <div className="p-4 flex flex-col flex-1">

                  {/* Job Title & Company */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>

                      <div className="flex items-center gap-1 text-primary/90 mt-0.5">
                        <Briefcase className="w-3 h-3" />

                        <span className="font-medium text-xs">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />

                    <span className="text-[10px]">
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-3 text-xs leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-auto">
                    <ul className="space-y-1">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 text-[11px] text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />

                          <span className="line-clamp-1">
                            {highlight}
                          </span>
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
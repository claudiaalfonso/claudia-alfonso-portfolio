import { Badge } from "@/components/ui/badge";

const freelance = [
  {
    role: "HappyRobot",
    company: "Silicon Valley",
    description:
      "Contributing to a Y Combinator-backed startup that builds AI-powered automation for logistics and supply chain operations.",
    badge: "YC S23",
  },
  {
    role: "Enera",
    company: "Early Stage Startup",
    description:
      "Designing and developing the web presence for this early-stage AI startup backed by $2M in funding.",
    badge: "2M Raised",
  },
];

const experiences = [
  {
    period: "Oct 2025 - Apr 2026",
    role: "Head of Talent and Culture",
    company: "Zynap",
    description:
      "Built the People function from scratch during a 2x scaling phase, implementing systems, success profiles, leveling frameworks, performance cycles, and org design in close partnership with the founders.",
  },
  {
    period: "Apr 2024 - Sep 2025",
    role: "Talent Acquisition Lead",
    company: "Amenitiz",
    description:
      "Led talent acquisition through 2.5x company growth, including C-suite hiring, launching the Medellin hub, designing local onboarding flows, and integrating systems with HQ.",
  },
  {
    period: "Aug 2022 - Apr 2024",
    role: "TA and Employer Branding",
    company: "Amenitiz",
    description:
      "Managed full-cycle hiring across tech and commercial roles while creating the process documentation that later became the Greenhouse migration blueprint.",
  },
  {
    period: "Nov 2021 - Aug 2022",
    role: "Tech TA Specialist",
    company: "Jobandtalent",
    description:
      "Handled high-volume engineering hiring in a fast-scaling, high-pressure environment.",
  },
  {
    period: "Jun 2021 - Nov 2021",
    role: "HRBP, Global IT Hub",
    company: "Nestle",
    description:
      "Served as HRBP supporting cross-border stakeholders at enterprise scale on a fixed-term contract.",
  },
  {
    period: "Apr 2020 - Apr 2021",
    role: "Partner Ops and Comms",
    company: "Glovo",
    description:
      "Developed marketing and operational foundations that shaped my systems-first approach to adoption and change management.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        {/* Freelance Section */}
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Freelance
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {freelance.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary/30 border border-border"
            >
              <Badge variant="secondary" className="text-xs mb-3">
                {item.badge}
              </Badge>
              <h3 className="font-medium text-foreground mb-1">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {item.company}
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Employment History */}
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Experience
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="md:w-48 shrink-0">
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.company}
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

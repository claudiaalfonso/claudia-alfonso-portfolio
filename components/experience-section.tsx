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
    more: {
      intro: [
        "Joined shortly after Zynap's Seed round to build the People foundation during a rapid scaling phase. After contributing across hiring, structure, and people operations, I decided to move on when it became clear the environment was not the right long-term fit.",
        "Worked directly with founders to design the hiring strategy, org structure, and internal systems required to scale a high-performance team in a VC-backed environment.",
      ],
      accomplishments: [
        "Defined the company's hiring strategy through a 2x growth phase, building the TA function from scratch and partnering closely with leadership on headcount planning and prioritization.",
        "Installed the company's hiring infrastructure: success profiles, structured interviews, scorecards, and HM training to improve decision quality and consistency.",
        "Built the TA operating layer, defining agency partnerships, recruiting tooling budget, pipeline instrumentation, and candidate communication SLAs.",
        "Implemented Rippling as HRIS and ATS, creating automated workflows for onboarding, offboarding, device management, and internal approvals.",
        "Designed key People architecture: comp and leveling frameworks, performance review cycles, and early career progression structures.",
        "Partnered with leadership on org design, defining roles, team structures, and reporting lines during the scaling phase.",
        "Helped establish the People and compliance foundations required for enterprise readiness, including GDPR processes and SOC 2 support via Vanta.",
        "Contributed to employer branding by shaping how Zynap presents itself to attract top talent in AI and cybersecurity.",
      ],
    },
  },
  {
    period: "Apr 2024 - Sep 2025",
    role: "Talent Acquisition Lead",
    company: "Amenitiz",
    description:
      "Led talent acquisition through 2.5x company growth, including C-suite hiring, launching the Medellin hub, designing local onboarding flows, and integrating systems with HQ.",
    more: {
      intro: [
        "Drove Amenitiz's global talent strategy and growth, helping build a culture of excellence in a fast-paced, high-growth environment while recruiting senior talent across markets.",
        "I also built the employer brand from the ground up and worked to position Amenitiz as one of the top employers in Europe.",
        "As Founding People Lead for the LATAM launch, I led the hiring, opening, and early setup of the company's newest office hub.",
      ],
      accomplishments: [
        "Led a high-performing team of Talent Acquisition Partners, consistently attracting and securing top-tier talent across all levels during a 2.5x growth phase.",
        "Spearheaded executive recruitment, successfully hiring C-suite leaders and department heads.",
        "Built and launched Amenitiz's employer branding strategy from scratch, increasing market presence and candidate engagement.",
        "Oversaw the opening of the LATAM office and market launch, expanding the company's global footprint and diversifying the talent pool.",
        "Implemented a new ATS (Greenhouse) and NPS tool (Starred), streamlining recruiting operations and improving candidate experience.",
        "Pioneered multiple cross-functional initiatives that delivered measurable business impact and operational efficiency.",
      ],
    },
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
                {exp.more && (
                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none text-sm text-primary transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                      More -&gt;
                    </summary>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
                      {exp.more.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <div className="space-y-3">
                        <p className="text-foreground font-medium">Key accomplishments</p>
                        <ul className="space-y-2 text-foreground/80">
                          {exp.more.accomplishments.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

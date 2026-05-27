import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Migo AI",
    url: "https://usemigo.ai",
    description: "My own early-stage venture exploring intelligent automation and AI-driven user assistance.",
    tags: ["AI", "Startup", "Product"],
  },
  {
    name: "Aleya Website",
    url: "https://aleya-ai.lovable.app",
    description: "The corporate website I designed and developed for Aleya, an early-stage AI company.",
    tags: ["Corporate", "AI", "Startup"],
  },
  {
    name: "Gravitas AI",
    url: "https://officeos.lovable.app",
    description: "An all-in-one platform that helps office managers streamline daily operations.",
    tags: ["SaaS", "Operations", "Product"],
  },
  {
    name: "Murphy AI Careers",
    url: "https://voice-ai-careers.lovable.app",
    description: "A careers page showcasing open roles and company culture for Murphy AI.",
    tags: ["Careers", "HR", "AI"],
  },
  {
    name: "Oliver & Pippa",
    url: "https://oliver-pippa-boutique.lovable.app",
    description: "A complete e-commerce store integrated with Shopify, built for a boutique retail brand.",
    tags: ["E-commerce", "Shopify", "Web"],
  },
  {
    name: "Bramble AI",
    url: "https://bramble-diy-companion.lovable.app",
    description: "An AI assistant that guides users through DIY projects step by step, complete with generated images.",
    tags: ["AI", "Consumer", "Product"],
  },
  {
    name: "AIEC Community",
    url: "https://aiec.lovable.app",
    description: "A startup concept for a recruiting layer tailored to tech communities.",
    tags: ["Recruiting", "Tech", "Startup"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Selected Projects
        </p>
        <div className="grid gap-6">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-start gap-4 py-4 -mx-4 px-4 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="md:w-48 shrink-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  {project.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

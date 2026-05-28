const coreTools = [
  "Rippling",
  "Greenhouse",
  "Teamtailor",
  "Vanta",
  "Starred",
  "Vercel",
  "Claude",
  "Codex",
  "Okta",
  "Notion",
  "Google Workspace",
  "Looker",
];

const coreDomains = [
  "HRIS / ATS Architecture",
  "Integrations and APIs",
  "MDM / RBAC",
  "SOC 2 and GDPR",
  "Data Migration",
  "Workflow Automation",
  "Reporting and Analytics",
  "Change Management",
  "Org Design",
  "Comp and Leveling",
  "Hiring Manager Enablement",
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Italian", level: "Professional" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Stack
            </p>
            <ul className="space-y-2">
              {coreTools.map((tool) => (
                <li key={tool} className="text-sm text-foreground/80">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Core Domains
            </p>
            <ul className="space-y-2">
              {coreDomains.map((domain) => (
                <li key={domain} className="text-sm text-foreground/80">
                  {domain}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Languages
            </p>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm text-foreground/80">
                  {lang.name}{" "}
                  <span className="text-muted-foreground">({lang.level})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

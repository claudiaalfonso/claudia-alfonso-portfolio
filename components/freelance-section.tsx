import { Badge } from "@/components/ui/badge";

export function FreelanceSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Freelancing
        </p>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-48 shrink-0">
              <Badge variant="secondary" className="text-xs">
                YC S23
              </Badge>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">
                HappyRobot
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Silicon Valley
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Contributing to a Y Combinator-backed startup that builds AI-powered
                automation for logistics and supply chain operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-48 shrink-0">
              <Badge variant="secondary" className="text-xs">
                2M Raised
              </Badge>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">
                Enera
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Early Stage Startup
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Designing and developing the web presence for this early-stage AI startup
                backed by $2M in funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

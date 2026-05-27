import Image from "next/image";

export function ClosingSection() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9608-yKEO6P7yhbjUvi95t9IchoPBaMXR6F.jpeg"
              alt="Claudia in Silicon Valley"
              width={280}
              height={280}
              className="rounded-2xl object-cover shadow-lg"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed text-balance">
              Always building. Always learning. Always up for a good challenge.
            </p>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                People person for early-stage startups, and for the moments when they&apos;re not so early anymore.
              </p>
              <p>
                Over the last few years, I&apos;ve helped startups build and scale their People & Talent functions from the ground up, without losing speed or quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

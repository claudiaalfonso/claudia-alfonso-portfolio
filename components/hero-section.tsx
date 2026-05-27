import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31E90E58-0693-4B00-8891-03A4811FEB4A.JPG-54w7w8Mfsd8PG5pDcXZfrsCS1l6KR7.jpeg"
              alt="Claudia Alfonso"
              width={160}
              height={160}
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                {"Hey, I'm Claudia 👋"}
              </h1>
            </div>
            <p className="text-muted-foreground text-xl md:text-2xl mb-6">{"happy you're here."}</p>
            <div className="text-foreground/90 leading-relaxed mb-8 max-w-xl space-y-4">
              <p>
                {"I've been a tech geek since I was a kid, obsessed with building things that look beautiful and actually work. Stuff people enjoy using."}
              </p>
              <p>
                {"This is my portfolio: a collection of projects I've built. I'm always up for a chat, and happiest when I'm building things with a-player founders."}
              </p>
              <p className="text-muted-foreground">
                Reach out if something sparks an idea.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/hello-claudia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

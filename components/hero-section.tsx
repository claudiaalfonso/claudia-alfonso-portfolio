import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {"Hey, I'm Claudia 👋"} <span className="text-muted-foreground font-normal text-xl md:text-2xl">happy you&apos;re here.</span>
            </h1>
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
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:claudia.alfonso30@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                claudia.alfonso30@gmail.com
              </Link>
              <Link
                href="https://linkedin.com/in/hello-claudia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

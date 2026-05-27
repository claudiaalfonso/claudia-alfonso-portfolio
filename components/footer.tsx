import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {"If you'd like to discuss a project or just say hi, I'm always down to chat."}
            </p>
            <Link
              href="mailto:claudia.alfonso30@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              claudia.alfonso30@gmail.com
            </Link>
          </div>
          <div className="flex gap-6 text-sm">
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
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Based in Barcelona
          </p>
        </div>
      </div>
    </footer>
  );
}

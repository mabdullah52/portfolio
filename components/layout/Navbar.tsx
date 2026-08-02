import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Background", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-bg/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-sm font-medium text-ink">
          {siteConfig.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-muted transition-colors hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={siteConfig.resumeUrl}
            download="Abdullah_Asim_Resume.pdf"
            variant="ghost"
            className="px-3 py-1.5 text-xs"
            ariaLabel="Download resume (PDF)"
          >
            Resume
          </Button>
        </div>
      </nav>
    </header>
  );
}

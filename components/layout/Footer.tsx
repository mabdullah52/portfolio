import { siteConfig, socialLinks } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
        <ul className="flex gap-5">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-xs text-muted transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

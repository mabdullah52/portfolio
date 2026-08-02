interface SocialLinkItemProps {
  readonly label: string;
  readonly href: string;
  readonly handle: string;
}

export function SocialLinkItem({ label, href, handle }: SocialLinkItemProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center justify-between rounded-md border border-line/50 bg-surface px-5 py-4 transition-colors duration-150 hover:border-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      <span>
        <span className="block font-display text-base text-ink">{label}</span>
        <span className="block font-mono text-sm text-muted">{handle}</span>
      </span>
      <span
        aria-hidden="true"
        className="font-mono text-signal transition-transform duration-150 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

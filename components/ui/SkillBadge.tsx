interface SkillBadgeProps {
  readonly label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded border border-line/60 bg-surface px-2.5 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  );
}

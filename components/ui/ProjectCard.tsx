import Link from "next/link";
import type { Project } from "@/types/project";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-line/50 bg-surface p-6 transition-colors duration-150 hover:border-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-signal">
          {project.stage}
        </span>
        {project.status === "In Progress" ? (
          <span className="shrink-0 rounded border border-line/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            In Progress
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 font-display text-xl font-medium text-ink group-hover:text-signal">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-ink group-hover:text-signal">
        View case study
        <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="font-mono text-sm text-muted transition-colors hover:text-signal"
      >
        ← Back to projects
      </Link>

      <span className="mt-8 block font-mono text-xs uppercase tracking-wider text-signal">
        {project.stage}
      </span>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-10 space-y-8 border-t border-line/40 pt-10">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-signal">
            The problem
          </h2>
          <p className="mt-3 leading-relaxed text-ink">{project.problem}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-signal">
            The approach
          </h2>
          <p className="mt-3 leading-relaxed text-ink">{project.approach}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-signal">
            The result
          </h2>
          <p className="mt-3 leading-relaxed text-ink">{project.result}</p>
        </section>
      </div>

      {project.links.length > 0 ? (
        <div className="mt-10 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <Button key={link.href} href={link.href} variant="ghost">
              {link.label}
            </Button>
          ))}
        </div>
      ) : null}
    </article>
  );
}

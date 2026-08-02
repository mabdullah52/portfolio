import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="03. Projects"
        title="Case studies"
        description="Each one includes the real problem, the approach, and what actually happened when it ran, bugs included."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {other.length > 0 ? (
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            Academic &amp; ML projects
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {other.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

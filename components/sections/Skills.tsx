import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="02. Skills" title="Tools I reach for" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

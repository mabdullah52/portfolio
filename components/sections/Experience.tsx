import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  experience,
  education,
  certifications,
  inProgressCourses,
} from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="04. Background"
        title="Education, experience & certifications"
      />
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            Education
          </h3>
          <div className="mt-4 space-y-6">
            {education.map((entry) => (
              <div key={entry.institution}>
                <p className="font-display text-base text-ink">{entry.credential}</p>
                <p className="mt-1 font-mono text-xs text-signal">
                  {entry.institution}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">{entry.period}</p>
                {entry.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {entry.detail}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            Experience
          </h3>
          <div className="mt-4 space-y-6">
            {experience.map((entry) => (
              <div key={entry.org}>
                <p className="font-display text-base text-ink">{entry.role}</p>
                <p className="mt-1 font-mono text-xs text-signal">{entry.org}</p>
                <p className="mt-1 font-mono text-xs text-muted">{entry.period}</p>
                <ul className="mt-2 space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
          Certifications
        </h3>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start justify-between gap-3 rounded-md border border-line/50 bg-surface px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-display text-sm text-ink">{cert.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{cert.issuer}</p>
              </div>
              {cert.status === "In Progress" ? (
                <span className="shrink-0 rounded border border-line/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                  In Progress
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-xs text-signal"
                >
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {inProgressCourses.length > 0 ? (
        <div className="mt-10">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            Currently learning
          </h3>
          <div className="mt-4 space-y-3">
            {inProgressCourses.map((course) => (
              <div key={course.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-ink">
                    {course.name}
                    <span className="ml-2 font-mono text-xs text-muted">
                      {course.issuer}
                    </span>
                  </p>
                  <span className="shrink-0 font-mono text-xs text-signal">
                    {course.percentComplete}%
                  </span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-surface-raised">
                  <div
                    className="h-full rounded-full bg-signal"
                    style={{ width: `${course.percentComplete}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

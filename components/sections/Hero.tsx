import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line/50 bg-surface px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-xs text-muted">
              Open to internships &amp; freelance work
            </span>
          </div>
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-signal">
            {siteConfig.subRole}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-6xl">
            {siteConfig.role}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 font-mono text-xs text-muted">Based in Lahore, Pakistan</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">See the work</Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
            <Button
              href={siteConfig.resumeUrl}
              download="Abdullah_Asim_Resume.pdf"
              variant="ghost"
              ariaLabel="Download resume (PDF)"
            >
              Download resume
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-56 sm:w-64">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-2xl bg-signal/10 blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-line/50 bg-surface">
              <Image
                src="/images/profile.png"
                alt="Portrait of Abdullah Asim"
                width={310}
                height={340}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <PipelineDiagram />
        <p className="mt-2 font-mono text-xs text-muted">
          The pattern behind every project below: the model orchestrates, deterministic
          code decides.
        </p>
      </div>
    </section>
  );
}

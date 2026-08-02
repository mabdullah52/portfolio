import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="01. About" title="What I actually build" />
      <div className="grid gap-10 sm:grid-cols-2">
        <p className="text-base leading-relaxed text-muted">
          I&apos;m a final-year Computer Science student who builds working AI systems, not
          demos that only work in a slide deck. Most of my LLM projects use large
          language models as an orchestration layer that decides which tool to call
          and how to phrase a reply, while keeping every decision that actually
          matters (refund eligibility, prices, stock, numeric results) in
          deterministic code that can&apos;t hallucinate. That same discipline carries
          into my deep learning work: CNN pipelines (EfficientNet, ResNet-50) for
          imaging tasks, and classical models (Random Forest, XGBoost, SMOTE) where a
          well-tuned algorithm still beats a neural net.
        </p>
        <p className="text-base leading-relaxed text-muted">
          I&apos;m currently extending that same philosophy into workflow automation with
          n8n: connecting real APIs and data sources into pipelines that run
          reliably without a human watching every step. Whether it&apos;s a RAG pipeline,
          a CNN diagnostic model, or a scheduled automation, the goal is the same:
          ground the system in real data, ship it end-to-end (FastAPI backends,
          real UIs, real deployments), and let code make the calls that need to be
          right every time.
        </p>
      </div>
    </section>
  );
}
